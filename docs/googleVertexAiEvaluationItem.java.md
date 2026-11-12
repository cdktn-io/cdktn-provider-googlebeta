# `googleVertexAiEvaluationItem` Submodule <a name="`googleVertexAiEvaluationItem` Submodule" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEvaluationItem <a name="GoogleVertexAiEvaluationItem" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item google_vertex_ai_evaluation_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItem;

GoogleVertexAiEvaluationItem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .evaluationItemType(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .evaluationRequest(GoogleVertexAiEvaluationItemEvaluationRequest)
//  .gcsUri(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiEvaluationItemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.evaluationItemType">evaluationItemType</a></code> | <code>java.lang.String</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.evaluationItemType"></a>

- *Type:* java.lang.String

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_item_type GoogleVertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#region GoogleVertexAiEvaluationItem#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#deletion_policy GoogleVertexAiEvaluationItem#deletion_policy}

---

##### `evaluationRequest`<sup>Optional</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.evaluationRequest"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_request GoogleVertexAiEvaluationItem#evaluation_request}

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.gcsUri"></a>

- *Type:* java.lang.String

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#gcs_uri GoogleVertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#labels GoogleVertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#metadata GoogleVertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#timeouts GoogleVertexAiEvaluationItem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest">putEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetEvaluationRequest">resetEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvaluationRequest` <a name="putEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest"></a>

```java
public void putEvaluationRequest(GoogleVertexAiEvaluationItemEvaluationRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putEvaluationRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiEvaluationItemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEvaluationRequest` <a name="resetEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetEvaluationRequest"></a>

```java
public void resetEvaluationRequest()
```

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetGcsUri"></a>

```java
public void resetGcsUri()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiEvaluationItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItem;

GoogleVertexAiEvaluationItem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItem;

GoogleVertexAiEvaluationItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItem;

GoogleVertexAiEvaluationItem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItem;

GoogleVertexAiEvaluationItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiEvaluationItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiEvaluationItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiEvaluationItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiEvaluationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEvaluationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList">GoogleVertexAiEvaluationItemErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationResponse">evaluationResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList">GoogleVertexAiEvaluationItemEvaluationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference">GoogleVertexAiEvaluationItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemTypeInput">evaluationItemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequestInput">evaluationRequestInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUriInput">gcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemType">evaluationItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.error"></a>

```java
public GoogleVertexAiEvaluationItemErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList">GoogleVertexAiEvaluationItemErrorList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequest"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestOutputReference getEvaluationRequest();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestOutputReference</a>

---

##### `evaluationResponse`<sup>Required</sup> <a name="evaluationResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationResponse"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseList getEvaluationResponse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList">GoogleVertexAiEvaluationItemEvaluationResponseList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeouts"></a>

```java
public GoogleVertexAiEvaluationItemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference">GoogleVertexAiEvaluationItemTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `evaluationItemTypeInput`<sup>Optional</sup> <a name="evaluationItemTypeInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemTypeInput"></a>

```java
public java.lang.String getEvaluationItemTypeInput();
```

- *Type:* java.lang.String

---

##### `evaluationRequestInput`<sup>Optional</sup> <a name="evaluationRequestInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationRequestInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequest getEvaluationRequestInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUriInput"></a>

```java
public java.lang.String getGcsUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiEvaluationItemTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.evaluationItemType"></a>

```java
public java.lang.String getEvaluationItemType();
```

- *Type:* java.lang.String

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEvaluationItemConfig <a name="GoogleVertexAiEvaluationItemConfig" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemConfig;

GoogleVertexAiEvaluationItemConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .evaluationItemType(java.lang.String)
    .region(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .evaluationRequest(GoogleVertexAiEvaluationItemEvaluationRequest)
//  .gcsUri(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiEvaluationItemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationItemType">evaluationItemType</a></code> | <code>java.lang.String</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationItemType"></a>

```java
public java.lang.String getEvaluationItemType();
```

- *Type:* java.lang.String

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_item_type GoogleVertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#region GoogleVertexAiEvaluationItem#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#deletion_policy GoogleVertexAiEvaluationItem#deletion_policy}

---

##### `evaluationRequest`<sup>Optional</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.evaluationRequest"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequest getEvaluationRequest();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_request GoogleVertexAiEvaluationItem#evaluation_request}

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#gcs_uri GoogleVertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#labels GoogleVertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#metadata GoogleVertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemConfig.property.timeouts"></a>

```java
public GoogleVertexAiEvaluationItemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#timeouts GoogleVertexAiEvaluationItem#timeouts}

---

### GoogleVertexAiEvaluationItemError <a name="GoogleVertexAiEvaluationItemError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemError;

GoogleVertexAiEvaluationItemError.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationRequest <a name="GoogleVertexAiEvaluationItemEvaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequest;

GoogleVertexAiEvaluationItemEvaluationRequest.builder()
//  .candidateResponses(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses>)
//  .goldenResponse(GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse)
//  .prompt(GoogleVertexAiEvaluationItemEvaluationRequestPrompt)
//  .rubrics(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubrics>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.candidateResponses">candidateResponses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>></code> | candidate_responses block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | golden_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | prompt block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.rubrics">rubrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>></code> | rubrics block. |

---

##### `candidateResponses`<sup>Optional</sup> <a name="candidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.candidateResponses"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses> getCandidateResponses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>>

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate_responses GoogleVertexAiEvaluationItem#candidate_responses}

---

##### `goldenResponse`<sup>Optional</sup> <a name="goldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.goldenResponse"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse getGoldenResponse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#golden_response GoogleVertexAiEvaluationItem#golden_response}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.prompt"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPrompt getPrompt();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt GoogleVertexAiEvaluationItem#prompt}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest.property.rubrics"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubrics> getRubrics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>>

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}

---

### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses;

GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.builder()
    .candidate(java.lang.String)
//  .agentData(java.lang.String)
//  .text(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate">candidate</a></code> | <code>java.lang.String</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData">agentData</a></code> | <code>java.lang.String</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text">text</a></code> | <code>java.lang.String</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value">value</a></code> | <code>java.lang.String</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate"></a>

```java
public java.lang.String getCandidate();
```

- *Type:* java.lang.String

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError;

GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse;

GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.builder()
    .candidate(java.lang.String)
//  .agentData(java.lang.String)
//  .text(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate">candidate</a></code> | <code>java.lang.String</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData">agentData</a></code> | <code>java.lang.String</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text">text</a></code> | <code>java.lang.String</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value">value</a></code> | <code>java.lang.String</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate"></a>

```java
public java.lang.String getCandidate();
```

- *Type:* java.lang.String

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError;

GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationRequestPrompt <a name="GoogleVertexAiEvaluationItemEvaluationRequestPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPrompt;

GoogleVertexAiEvaluationItemEvaluationRequestPrompt.builder()
//  .agentData(java.lang.String)
//  .promptTemplateData(GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData)
//  .text(java.lang.String)
//  .userScenario(GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.agentData">agentData</a></code> | <code>java.lang.String</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | prompt_template_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.text">text</a></code> | <code>java.lang.String</code> | Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | user_scenario block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.value">value</a></code> | <code>java.lang.String</code> | Fields and values that can be used to populate the prompt template, as a JSON string. |

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}

---

##### `promptTemplateData`<sup>Optional</sup> <a name="promptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData getPromptTemplateData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt_template_data GoogleVertexAiEvaluationItem#prompt_template_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}

---

##### `userScenario`<sup>Optional</sup> <a name="userScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario getUserScenario();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#user_scenario GoogleVertexAiEvaluationItem#user_scenario}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}

---

### GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;

GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.builder()
//  .values(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values">values</a></code> | <code>java.lang.String</code> | The values for fields in the prompt template, as a JSON string mapping field names to Content objects. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values"></a>

```java
public java.lang.String getValues();
```

- *Type:* java.lang.String

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#values GoogleVertexAiEvaluationItem#values}

---

### GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario;

GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.builder()
    .conversationPlan(java.lang.String)
    .startingPrompt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan">conversationPlan</a></code> | <code>java.lang.String</code> | The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt">startingPrompt</a></code> | <code>java.lang.String</code> | The prompt that starts the conversation between the simulated user and the agent under test. |

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan"></a>

```java
public java.lang.String getConversationPlan();
```

- *Type:* java.lang.String

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#conversation_plan GoogleVertexAiEvaluationItem#conversation_plan}

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt"></a>

```java
public java.lang.String getStartingPrompt();
```

- *Type:* java.lang.String

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#starting_prompt GoogleVertexAiEvaluationItem#starting_prompt}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubrics <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubrics;

GoogleVertexAiEvaluationItemEvaluationRequestRubrics.builder()
    .name(java.lang.String)
//  .displayName(java.lang.String)
//  .groupId(java.lang.String)
//  .rubrics(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#name GoogleVertexAiEvaluationItem#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Unique identifier for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics">rubrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>></code> | rubrics block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#name GoogleVertexAiEvaluationItem#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#group_id GoogleVertexAiEvaluationItem#group_id}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics> getRubrics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>>

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics;

GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.builder()
    .content(GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent)
//  .importance(java.lang.String)
//  .rubricId(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content">content</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | content block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance">importance</a></code> | <code>java.lang.String</code> | The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId">rubricId</a></code> | <code>java.lang.String</code> | Unique identifier for the rubric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type">type</a></code> | <code>java.lang.String</code> | A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent getContent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#content GoogleVertexAiEvaluationItem#content}

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance"></a>

```java
public java.lang.String getImportance();
```

- *Type:* java.lang.String

The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#importance GoogleVertexAiEvaluationItem#importance}

---

##### `rubricId`<sup>Optional</sup> <a name="rubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId"></a>

```java
public java.lang.String getRubricId();
```

- *Type:* java.lang.String

Unique identifier for the rubric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubric_id GoogleVertexAiEvaluationItem#rubric_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#type GoogleVertexAiEvaluationItem#type}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;

GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.builder()
//  .property(GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property">property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty getProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#property GoogleVertexAiEvaluationItem#property}

---

### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;

GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.builder()
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description">description</a></code> | <code>java.lang.String</code> | Description of the property being evaluated. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#description GoogleVertexAiEvaluationItem#description}

---

### GoogleVertexAiEvaluationItemEvaluationResponse <a name="GoogleVertexAiEvaluationItemEvaluationResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponse;

GoogleVertexAiEvaluationItemEvaluationResponse.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults;

GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError;

GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError.builder()
    .build();
```


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts;

GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.builder()
    .build();
```


### GoogleVertexAiEvaluationItemTimeouts <a name="GoogleVertexAiEvaluationItemTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemTimeouts;

GoogleVertexAiEvaluationItemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#create GoogleVertexAiEvaluationItem#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#delete GoogleVertexAiEvaluationItem#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#update GoogleVertexAiEvaluationItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#create GoogleVertexAiEvaluationItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#delete GoogleVertexAiEvaluationItem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#update GoogleVertexAiEvaluationItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEvaluationItemErrorList <a name="GoogleVertexAiEvaluationItemErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemErrorList;

new GoogleVertexAiEvaluationItemErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get"></a>

```java
public GoogleVertexAiEvaluationItemErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemErrorOutputReference <a name="GoogleVertexAiEvaluationItemErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemErrorOutputReference;

new GoogleVertexAiEvaluationItemErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError">GoogleVertexAiEvaluationItemError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemError">GoogleVertexAiEvaluationItemError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList;

new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList;

new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>>

---


### GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData"></a>

```java
public void resetAgentData()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput">candidateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData">agentData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate">candidate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput"></a>

```java
public java.lang.String getAgentDataInput();
```

- *Type:* java.lang.String

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput"></a>

```java
public java.lang.String getCandidateInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate"></a>

```java
public java.lang.String getCandidate();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList;

new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData"></a>

```java
public void resetAgentData()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput">candidateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData">agentData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate">candidate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput"></a>

```java
public java.lang.String getAgentDataInput();
```

- *Type:* java.lang.String

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput"></a>

```java
public java.lang.String getCandidateInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate"></a>

```java
public java.lang.String getCandidate();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses">putCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse">putGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses">resetCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse">resetGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt">resetPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCandidateResponses` <a name="putCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses"></a>

```java
public void putCandidateResponses(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>>

---

##### `putGoldenResponse` <a name="putGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse"></a>

```java
public void putGoldenResponse(GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `putPrompt` <a name="putPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt"></a>

```java
public void putPrompt(GoogleVertexAiEvaluationItemEvaluationRequestPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics"></a>

```java
public void putRubrics(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>>

---

##### `resetCandidateResponses` <a name="resetCandidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses"></a>

```java
public void resetCandidateResponses()
```

##### `resetGoldenResponse` <a name="resetGoldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse"></a>

```java
public void resetGoldenResponse()
```

##### `resetPrompt` <a name="resetPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt"></a>

```java
public void resetPrompt()
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics"></a>

```java
public void resetRubrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses">candidateResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput">candidateResponsesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput">goldenResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResponses`<sup>Required</sup> <a name="candidateResponses" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList getCandidateResponses();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a>

---

##### `goldenResponse`<sup>Required</sup> <a name="goldenResponse" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference getGoldenResponse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a>

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference getPrompt();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference</a>

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsList getRubrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsList</a>

---

##### `candidateResponsesInput`<sup>Optional</sup> <a name="candidateResponsesInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses> getCandidateResponsesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses">GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses</a>>

---

##### `goldenResponseInput`<sup>Optional</sup> <a name="goldenResponseInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse getGoldenResponseInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse">GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPrompt getPromptInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubrics> getRubricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequest getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequest">GoogleVertexAiEvaluationItemEvaluationRequest</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData">putPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario">putUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData">resetPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario">resetUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplateData` <a name="putPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData"></a>

```java
public void putPromptTemplateData(GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `putUserScenario` <a name="putUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario"></a>

```java
public void putUserScenario(GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData"></a>

```java
public void resetAgentData()
```

##### `resetPromptTemplateData` <a name="resetPromptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData"></a>

```java
public void resetPromptTemplateData()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetUserScenario` <a name="resetUserScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario"></a>

```java
public void resetUserScenario()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput">promptTemplateDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput">userScenarioInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData">agentData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptTemplateData`<sup>Required</sup> <a name="promptTemplateData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference getPromptTemplateData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a>

---

##### `userScenario`<sup>Required</sup> <a name="userScenario" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference getUserScenario();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput"></a>

```java
public java.lang.String getAgentDataInput();
```

- *Type:* java.lang.String

---

##### `promptTemplateDataInput`<sup>Optional</sup> <a name="promptTemplateDataInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData getPromptTemplateDataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `userScenarioInput`<sup>Optional</sup> <a name="userScenarioInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario getUserScenarioInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData"></a>

```java
public java.lang.String getAgentData();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPrompt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPrompt">GoogleVertexAiEvaluationItemEvaluationRequestPrompt</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values">values</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput"></a>

```java
public java.lang.String getValuesInput();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values"></a>

```java
public java.lang.String getValues();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput">conversationPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput">startingPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan">conversationPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt">startingPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationPlanInput`<sup>Optional</sup> <a name="conversationPlanInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput"></a>

```java
public java.lang.String getConversationPlanInput();
```

- *Type:* java.lang.String

---

##### `startingPromptInput`<sup>Optional</sup> <a name="startingPromptInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput"></a>

```java
public java.lang.String getStartingPromptInput();
```

- *Type:* java.lang.String

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan"></a>

```java
public java.lang.String getConversationPlan();
```

- *Type:* java.lang.String

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt"></a>

```java
public java.lang.String getStartingPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario">GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsList <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubrics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics"></a>

```java
public void putRubrics(IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics"></a>

```java
public void resetRubrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList getRubrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics> getRubricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiEvaluationItemEvaluationRequestRubrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubrics</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty">resetProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperty` <a name="putProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty"></a>

```java
public void putProperty(GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `resetProperty` <a name="resetProperty" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty"></a>

```java
public void resetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property">property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput">propertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference getProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a>

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty getPropertyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>>

---


### GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference;

new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance">resetImportance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId">resetRubricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent"></a>

```java
public void putContent(GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `resetImportance` <a name="resetImportance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance"></a>

```java
public void resetImportance()
```

##### `resetRubricId` <a name="resetRubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId"></a>

```java
public void resetRubricId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput">importanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput">rubricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance">importance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId">rubricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent getContentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `importanceInput`<sup>Optional</sup> <a name="importanceInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput"></a>

```java
public java.lang.String getImportanceInput();
```

- *Type:* java.lang.String

---

##### `rubricIdInput`<sup>Optional</sup> <a name="rubricIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput"></a>

```java
public java.lang.String getRubricIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance"></a>

```java
public java.lang.String getImportance();
```

- *Type:* java.lang.String

---

##### `rubricId`<sup>Required</sup> <a name="rubricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId"></a>

```java
public java.lang.String getRubricId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics">GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults">additionalResults</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate">candidate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation">explanation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts">rubricVerdicts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score">score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalResults`<sup>Required</sup> <a name="additionalResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults"></a>

```java
public java.lang.String getAdditionalResults();
```

- *Type:* java.lang.String

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate"></a>

```java
public java.lang.String getCandidate();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a>

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation"></a>

```java
public java.lang.String getExplanation();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `rubricVerdicts`<sup>Required</sup> <a name="rubricVerdicts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList getRubricVerdicts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a>

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference;

new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric">evaluatedRubric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning">reasoning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict">verdict</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluatedRubric`<sup>Required</sup> <a name="evaluatedRubric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric"></a>

```java
public java.lang.String getEvaluatedRubric();
```

- *Type:* java.lang.String

---

##### `reasoning`<sup>Required</sup> <a name="reasoning" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning"></a>

```java
public java.lang.String getReasoning();
```

- *Type:* java.lang.String

---

##### `verdict`<sup>Required</sup> <a name="verdict" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict"></a>

```java
public IResolvable getVerdict();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a>

---


### GoogleVertexAiEvaluationItemEvaluationResponseList <a name="GoogleVertexAiEvaluationItemEvaluationResponseList" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseList;

new GoogleVertexAiEvaluationItemEvaluationResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiEvaluationItemEvaluationResponseOutputReference <a name="GoogleVertexAiEvaluationItemEvaluationResponseOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference;

new GoogleVertexAiEvaluationItemEvaluationResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults">candidateResults</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest">evaluationRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun">evaluationRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse">GoogleVertexAiEvaluationItemEvaluationResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResults`<sup>Required</sup> <a name="candidateResults" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList getCandidateResults();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList">GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest"></a>

```java
public java.lang.String getEvaluationRequest();
```

- *Type:* java.lang.String

---

##### `evaluationRun`<sup>Required</sup> <a name="evaluationRun" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun"></a>

```java
public java.lang.String getEvaluationRun();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiEvaluationItemEvaluationResponse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemEvaluationResponse">GoogleVertexAiEvaluationItemEvaluationResponse</a>

---


### GoogleVertexAiEvaluationItemTimeoutsOutputReference <a name="GoogleVertexAiEvaluationItemTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_evaluation_item.GoogleVertexAiEvaluationItemTimeoutsOutputReference;

new GoogleVertexAiEvaluationItemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiEvaluationItemTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationItem.GoogleVertexAiEvaluationItemTimeouts">GoogleVertexAiEvaluationItemTimeouts</a>

---



