# `googleVertexAiRagFile` Submodule <a name="`googleVertexAiRagFile` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagFile <a name="GoogleVertexAiRagFile" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file google_vertex_ai_rag_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFile;

GoogleVertexAiRagFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ragCorpus(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .gcsSource(GoogleVertexAiRagFileGcsSource)
//  .googleDriveSource(GoogleVertexAiRagFileGoogleDriveSource)
//  .id(java.lang.String)
//  .maxEmbeddingRequestsPerMin(java.lang.Number)
//  .project(java.lang.String)
//  .ragFileParsingConfig(GoogleVertexAiRagFileRagFileParsingConfig)
//  .ragFileTransformationConfig(GoogleVertexAiRagFileRagFileTransformationConfig)
//  .timeouts(GoogleVertexAiRagFileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragCorpus">ragCorpus</a></code> | <code>java.lang.String</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.gcsSource">gcsSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.googleDriveSource">googleDriveSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin">maxEmbeddingRequestsPerMin</a></code> | <code>java.lang.Number</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileParsingConfig">ragFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileTransformationConfig">ragFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ragCorpus`<sup>Required</sup> <a name="ragCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragCorpus"></a>

- *Type:* java.lang.String

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_corpus GoogleVertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#region GoogleVertexAiRagFile#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#deletion_policy GoogleVertexAiRagFile#deletion_policy}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.gcsSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#gcs_source GoogleVertexAiRagFile#gcs_source}

---

##### `googleDriveSource`<sup>Optional</sup> <a name="googleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.googleDriveSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#google_drive_source GoogleVertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxEmbeddingRequestsPerMin`<sup>Optional</sup> <a name="maxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin"></a>

- *Type:* java.lang.Number

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_embedding_requests_per_min GoogleVertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}.

---

##### `ragFileParsingConfig`<sup>Optional</sup> <a name="ragFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileParsingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_parsing_config GoogleVertexAiRagFile#rag_file_parsing_config}

---

##### `ragFileTransformationConfig`<sup>Optional</sup> <a name="ragFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileTransformationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_transformation_config GoogleVertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#timeouts GoogleVertexAiRagFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource">putGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource">putGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig">putRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig">putRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource">resetGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin">resetMaxEmbeddingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig">resetRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig">resetRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGcsSource` <a name="putGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource"></a>

```java
public void putGcsSource(GoogleVertexAiRagFileGcsSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---

##### `putGoogleDriveSource` <a name="putGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource"></a>

```java
public void putGoogleDriveSource(GoogleVertexAiRagFileGoogleDriveSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---

##### `putRagFileParsingConfig` <a name="putRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig"></a>

```java
public void putRagFileParsingConfig(GoogleVertexAiRagFileRagFileParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---

##### `putRagFileTransformationConfig` <a name="putRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig"></a>

```java
public void putRagFileTransformationConfig(GoogleVertexAiRagFileRagFileTransformationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiRagFileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource"></a>

```java
public void resetGcsSource()
```

##### `resetGoogleDriveSource` <a name="resetGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource"></a>

```java
public void resetGoogleDriveSource()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId"></a>

```java
public void resetId()
```

##### `resetMaxEmbeddingRequestsPerMin` <a name="resetMaxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin"></a>

```java
public void resetMaxEmbeddingRequestsPerMin()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject"></a>

```java
public void resetProject()
```

##### `resetRagFileParsingConfig` <a name="resetRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig"></a>

```java
public void resetRagFileParsingConfig()
```

##### `resetRagFileTransformationConfig` <a name="resetRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig"></a>

```java
public void resetRagFileTransformationConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFile;

GoogleVertexAiRagFile.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFile;

GoogleVertexAiRagFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFile;

GoogleVertexAiRagFile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFile;

GoogleVertexAiRagFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiRagFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiRagFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiRagFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus">fileStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource">googleDriveSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig">ragFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig">ragFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata">userMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput">gcsSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput">googleDriveSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput">maxEmbeddingRequestsPerMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput">ragCorpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput">ragFileParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput">ragFileTransformationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin">maxEmbeddingRequestsPerMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus">ragCorpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fileStatus`<sup>Required</sup> <a name="fileStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus"></a>

```java
public GoogleVertexAiRagFileFileStatusList getFileStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource"></a>

```java
public GoogleVertexAiRagFileGcsSourceOutputReference getGcsSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a>

---

##### `googleDriveSource`<sup>Required</sup> <a name="googleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSourceOutputReference getGoogleDriveSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ragFileParsingConfig`<sup>Required</sup> <a name="ragFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigOutputReference getRagFileParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a>

---

##### `ragFileTransformationConfig`<sup>Required</sup> <a name="ragFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigOutputReference getRagFileTransformationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts"></a>

```java
public GoogleVertexAiRagFileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata"></a>

```java
public java.lang.String getUserMetadata();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput"></a>

```java
public GoogleVertexAiRagFileGcsSource getGcsSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---

##### `googleDriveSourceInput`<sup>Optional</sup> <a name="googleDriveSourceInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSource getGoogleDriveSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxEmbeddingRequestsPerMinInput`<sup>Optional</sup> <a name="maxEmbeddingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput"></a>

```java
public java.lang.Number getMaxEmbeddingRequestsPerMinInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `ragCorpusInput`<sup>Optional</sup> <a name="ragCorpusInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput"></a>

```java
public java.lang.String getRagCorpusInput();
```

- *Type:* java.lang.String

---

##### `ragFileParsingConfigInput`<sup>Optional</sup> <a name="ragFileParsingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfig getRagFileParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---

##### `ragFileTransformationConfigInput`<sup>Optional</sup> <a name="ragFileTransformationConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfig getRagFileTransformationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiRagFileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxEmbeddingRequestsPerMin`<sup>Required</sup> <a name="maxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin"></a>

```java
public java.lang.Number getMaxEmbeddingRequestsPerMin();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ragCorpus`<sup>Required</sup> <a name="ragCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus"></a>

```java
public java.lang.String getRagCorpus();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagFileConfig <a name="GoogleVertexAiRagFileConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileConfig;

GoogleVertexAiRagFileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ragCorpus(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .gcsSource(GoogleVertexAiRagFileGcsSource)
//  .googleDriveSource(GoogleVertexAiRagFileGoogleDriveSource)
//  .id(java.lang.String)
//  .maxEmbeddingRequestsPerMin(java.lang.Number)
//  .project(java.lang.String)
//  .ragFileParsingConfig(GoogleVertexAiRagFileRagFileParsingConfig)
//  .ragFileTransformationConfig(GoogleVertexAiRagFileRagFileTransformationConfig)
//  .timeouts(GoogleVertexAiRagFileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus">ragCorpus</a></code> | <code>java.lang.String</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource">googleDriveSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin">maxEmbeddingRequestsPerMin</a></code> | <code>java.lang.Number</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig">ragFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig">ragFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ragCorpus`<sup>Required</sup> <a name="ragCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus"></a>

```java
public java.lang.String getRagCorpus();
```

- *Type:* java.lang.String

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_corpus GoogleVertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#region GoogleVertexAiRagFile#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#deletion_policy GoogleVertexAiRagFile#deletion_policy}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource"></a>

```java
public GoogleVertexAiRagFileGcsSource getGcsSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#gcs_source GoogleVertexAiRagFile#gcs_source}

---

##### `googleDriveSource`<sup>Optional</sup> <a name="googleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSource getGoogleDriveSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#google_drive_source GoogleVertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxEmbeddingRequestsPerMin`<sup>Optional</sup> <a name="maxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin"></a>

```java
public java.lang.Number getMaxEmbeddingRequestsPerMin();
```

- *Type:* java.lang.Number

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_embedding_requests_per_min GoogleVertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}.

---

##### `ragFileParsingConfig`<sup>Optional</sup> <a name="ragFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfig getRagFileParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_parsing_config GoogleVertexAiRagFile#rag_file_parsing_config}

---

##### `ragFileTransformationConfig`<sup>Optional</sup> <a name="ragFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfig getRagFileTransformationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_transformation_config GoogleVertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts"></a>

```java
public GoogleVertexAiRagFileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#timeouts GoogleVertexAiRagFile#timeouts}

---

### GoogleVertexAiRagFileFileStatus <a name="GoogleVertexAiRagFileFileStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileFileStatus;

GoogleVertexAiRagFileFileStatus.builder()
    .build();
```


### GoogleVertexAiRagFileGcsSource <a name="GoogleVertexAiRagFileGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGcsSource;

GoogleVertexAiRagFileGcsSource.builder()
    .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#uris GoogleVertexAiRagFile#uris}

---

### GoogleVertexAiRagFileGoogleDriveSource <a name="GoogleVertexAiRagFileGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGoogleDriveSource;

GoogleVertexAiRagFileGoogleDriveSource.builder()
    .resourceIds(GoogleVertexAiRagFileGoogleDriveSourceResourceIds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds">resourceIds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | resource_ids block. |

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds getResourceIds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_ids GoogleVertexAiRagFile#resource_ids}

---

### GoogleVertexAiRagFileGoogleDriveSourceResourceIds <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGoogleDriveSourceResourceIds;

GoogleVertexAiRagFileGoogleDriveSourceResourceIds.builder()
    .resourceId(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the Google Drive file. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The type of the Google Drive resource. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_id GoogleVertexAiRagFile#resource_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_type GoogleVertexAiRagFile#resource_type}

---

### GoogleVertexAiRagFileRagFileParsingConfig <a name="GoogleVertexAiRagFileRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfig;

GoogleVertexAiRagFileRagFileParsingConfig.builder()
//  .layoutParser(GoogleVertexAiRagFileRagFileParsingConfigLayoutParser)
//  .llmParser(GoogleVertexAiRagFileRagFileParsingConfigLlmParser)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser">layoutParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | layout_parser block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser">llmParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | llm_parser block. |

---

##### `layoutParser`<sup>Optional</sup> <a name="layoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser getLayoutParser();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#layout_parser GoogleVertexAiRagFile#layout_parser}

---

##### `llmParser`<sup>Optional</sup> <a name="llmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser getLlmParser();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#llm_parser GoogleVertexAiRagFile#llm_parser}

---

### GoogleVertexAiRagFileRagFileParsingConfigLayoutParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser;

GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.builder()
//  .maxParsingRequestsPerMin(java.lang.Number)
//  .processorName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin">maxParsingRequestsPerMin</a></code> | <code>java.lang.Number</code> | The maximum number of requests the job is allowed to make to the Document AI processor per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName">processorName</a></code> | <code>java.lang.String</code> | The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'. |

---

##### `maxParsingRequestsPerMin`<sup>Optional</sup> <a name="maxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMin();
```

- *Type:* java.lang.Number

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `processorName`<sup>Optional</sup> <a name="processorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName"></a>

```java
public java.lang.String getProcessorName();
```

- *Type:* java.lang.String

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#processor_name GoogleVertexAiRagFile#processor_name}

---

### GoogleVertexAiRagFileRagFileParsingConfigLlmParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfigLlmParser;

GoogleVertexAiRagFileRagFileParsingConfigLlmParser.builder()
//  .customParsingPrompt(java.lang.String)
//  .maxParsingRequestsPerMin(java.lang.Number)
//  .modelName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt">customParsingPrompt</a></code> | <code>java.lang.String</code> | The prompt to use for parsing. If not specified, a default prompt is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin">maxParsingRequestsPerMin</a></code> | <code>java.lang.Number</code> | The maximum number of requests the job is allowed to make to the LLM model per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName">modelName</a></code> | <code>java.lang.String</code> | The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'. |

---

##### `customParsingPrompt`<sup>Optional</sup> <a name="customParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt"></a>

```java
public java.lang.String getCustomParsingPrompt();
```

- *Type:* java.lang.String

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#custom_parsing_prompt GoogleVertexAiRagFile#custom_parsing_prompt}

---

##### `maxParsingRequestsPerMin`<sup>Optional</sup> <a name="maxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMin();
```

- *Type:* java.lang.Number

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#model_name GoogleVertexAiRagFile#model_name}

---

### GoogleVertexAiRagFileRagFileTransformationConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfig;

GoogleVertexAiRagFileRagFileTransformationConfig.builder()
//  .ragFileChunkingConfig(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig">ragFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | rag_file_chunking_config block. |

---

##### `ragFileChunkingConfig`<sup>Optional</sup> <a name="ragFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig getRagFileChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_chunking_config GoogleVertexAiRagFile#rag_file_chunking_config}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig;

GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.builder()
//  .fixedLengthChunking(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking">fixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | fixed_length_chunking block. |

---

##### `fixedLengthChunking`<sup>Optional</sup> <a name="fixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking getFixedLengthChunking();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#fixed_length_chunking GoogleVertexAiRagFile#fixed_length_chunking}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking;

GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.builder()
//  .chunkOverlap(java.lang.Number)
//  .chunkSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap">chunkOverlap</a></code> | <code>java.lang.Number</code> | The overlap between chunks. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | The size of the chunks. |

---

##### `chunkOverlap`<sup>Optional</sup> <a name="chunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap"></a>

```java
public java.lang.Number getChunkOverlap();
```

- *Type:* java.lang.Number

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_overlap GoogleVertexAiRagFile#chunk_overlap}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_size GoogleVertexAiRagFile#chunk_size}

---

### GoogleVertexAiRagFileTimeouts <a name="GoogleVertexAiRagFileTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileTimeouts;

GoogleVertexAiRagFileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagFileFileStatusList <a name="GoogleVertexAiRagFileFileStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileFileStatusList;

new GoogleVertexAiRagFileFileStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get"></a>

```java
public GoogleVertexAiRagFileFileStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiRagFileFileStatusOutputReference <a name="GoogleVertexAiRagFileFileStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileFileStatusOutputReference;

new GoogleVertexAiRagFileFileStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus">errorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus"></a>

```java
public java.lang.String getErrorStatus();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileFileStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a>

---


### GoogleVertexAiRagFileGcsSourceOutputReference <a name="GoogleVertexAiRagFileGcsSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGcsSourceOutputReference;

new GoogleVertexAiRagFileGcsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileGcsSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGoogleDriveSourceOutputReference;

new GoogleVertexAiRagFileGoogleDriveSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds">putResourceIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceIds` <a name="putResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds"></a>

```java
public void putResourceIds(GoogleVertexAiRagFileGoogleDriveSourceResourceIds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds">resourceIds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference getResourceIds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a>

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds getResourceIdsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference;

new GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference;

new GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin">resetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName">resetProcessorName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxParsingRequestsPerMin` <a name="resetMaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```java
public void resetMaxParsingRequestsPerMin()
```

##### `resetProcessorName` <a name="resetProcessorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName"></a>

```java
public void resetProcessorName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput">maxParsingRequestsPerMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput">processorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin">maxParsingRequestsPerMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName">processorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="maxParsingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMinInput();
```

- *Type:* java.lang.Number

---

##### `processorNameInput`<sup>Optional</sup> <a name="processorNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput"></a>

```java
public java.lang.String getProcessorNameInput();
```

- *Type:* java.lang.String

---

##### `maxParsingRequestsPerMin`<sup>Required</sup> <a name="maxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMin();
```

- *Type:* java.lang.Number

---

##### `processorName`<sup>Required</sup> <a name="processorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName"></a>

```java
public java.lang.String getProcessorName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference;

new GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt">resetCustomParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin">resetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName">resetModelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomParsingPrompt` <a name="resetCustomParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt"></a>

```java
public void resetCustomParsingPrompt()
```

##### `resetMaxParsingRequestsPerMin` <a name="resetMaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```java
public void resetMaxParsingRequestsPerMin()
```

##### `resetModelName` <a name="resetModelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName"></a>

```java
public void resetModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput">customParsingPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput">maxParsingRequestsPerMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt">customParsingPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin">maxParsingRequestsPerMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customParsingPromptInput`<sup>Optional</sup> <a name="customParsingPromptInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput"></a>

```java
public java.lang.String getCustomParsingPromptInput();
```

- *Type:* java.lang.String

---

##### `maxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="maxParsingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMinInput();
```

- *Type:* java.lang.Number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `customParsingPrompt`<sup>Required</sup> <a name="customParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt"></a>

```java
public java.lang.String getCustomParsingPrompt();
```

- *Type:* java.lang.String

---

##### `maxParsingRequestsPerMin`<sup>Required</sup> <a name="maxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin"></a>

```java
public java.lang.Number getMaxParsingRequestsPerMin();
```

- *Type:* java.lang.Number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileParsingConfigOutputReference;

new GoogleVertexAiRagFileRagFileParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser">putLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser">putLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser">resetLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser">resetLlmParser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayoutParser` <a name="putLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser"></a>

```java
public void putLayoutParser(GoogleVertexAiRagFileRagFileParsingConfigLayoutParser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `putLlmParser` <a name="putLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser"></a>

```java
public void putLlmParser(GoogleVertexAiRagFileRagFileParsingConfigLlmParser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `resetLayoutParser` <a name="resetLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser"></a>

```java
public void resetLayoutParser()
```

##### `resetLlmParser` <a name="resetLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser"></a>

```java
public void resetLlmParser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser">layoutParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser">llmParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput">layoutParserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput">llmParserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layoutParser`<sup>Required</sup> <a name="layoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference getLayoutParser();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a>

---

##### `llmParser`<sup>Required</sup> <a name="llmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference getLlmParser();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a>

---

##### `layoutParserInput`<sup>Optional</sup> <a name="layoutParserInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser getLayoutParserInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `llmParserInput`<sup>Optional</sup> <a name="llmParserInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser getLlmParserInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference;

new GoogleVertexAiRagFileRagFileTransformationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig">putRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig">resetRagFileChunkingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRagFileChunkingConfig` <a name="putRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig"></a>

```java
public void putRagFileChunkingConfig(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `resetRagFileChunkingConfig` <a name="resetRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig"></a>

```java
public void resetRagFileChunkingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig">ragFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput">ragFileChunkingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ragFileChunkingConfig`<sup>Required</sup> <a name="ragFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference getRagFileChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a>

---

##### `ragFileChunkingConfigInput`<sup>Optional</sup> <a name="ragFileChunkingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig getRagFileChunkingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap">resetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChunkOverlap` <a name="resetChunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap"></a>

```java
public void resetChunkOverlap()
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize"></a>

```java
public void resetChunkSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput">chunkOverlapInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap">chunkOverlap</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chunkOverlapInput`<sup>Optional</sup> <a name="chunkOverlapInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput"></a>

```java
public java.lang.Number getChunkOverlapInput();
```

- *Type:* java.lang.Number

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput"></a>

```java
public java.lang.Number getChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `chunkOverlap`<sup>Required</sup> <a name="chunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap"></a>

```java
public java.lang.Number getChunkOverlap();
```

- *Type:* java.lang.Number

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking">putFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking">resetFixedLengthChunking</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedLengthChunking` <a name="putFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking"></a>

```java
public void putFixedLengthChunking(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `resetFixedLengthChunking` <a name="resetFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking"></a>

```java
public void resetFixedLengthChunking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking">fixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput">fixedLengthChunkingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedLengthChunking`<sup>Required</sup> <a name="fixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference getFixedLengthChunking();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a>

---

##### `fixedLengthChunkingInput`<sup>Optional</sup> <a name="fixedLengthChunkingInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking getFixedLengthChunkingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---


### GoogleVertexAiRagFileTimeoutsOutputReference <a name="GoogleVertexAiRagFileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_rag_file.GoogleVertexAiRagFileTimeoutsOutputReference;

new GoogleVertexAiRagFileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiRagFileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---



