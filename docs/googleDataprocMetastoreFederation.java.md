# `googleDataprocMetastoreFederation` Submodule <a name="`googleDataprocMetastoreFederation` Submodule" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreFederation <a name="GoogleDataprocMetastoreFederation" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation google_dataproc_metastore_federation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederation;

GoogleDataprocMetastoreFederation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backendMetastores(IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores>)
    .federationId(java.lang.String)
    .version(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleDataprocMetastoreFederationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.backendMetastores">backendMetastores</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>></code> | backend_metastores block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.federationId">federationId</a></code> | <code>java.lang.String</code> | The ID of the metastore federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.backendMetastores"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>>

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.federationId"></a>

- *Type:* java.lang.String

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#deletion_policy GoogleDataprocMetastoreFederation#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the federation.

Defaults to false.
When the field is set to true in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the federation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#deletion_protection GoogleDataprocMetastoreFederation#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#tags GoogleDataprocMetastoreFederation#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores">putBackendMetastores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendMetastores` <a name="putBackendMetastores" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores"></a>

```java
public void putBackendMetastores(IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocMetastoreFederationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederation;

GoogleDataprocMetastoreFederation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederation;

GoogleDataprocMetastoreFederation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederation;

GoogleDataprocMetastoreFederation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederation;

GoogleDataprocMetastoreFederation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocMetastoreFederation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocMetastoreFederation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocMetastoreFederation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreFederation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores">backendMetastores</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput">backendMetastoresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput">federationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId">federationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores"></a>

```java
public GoogleDataprocMetastoreFederationBackendMetastoresList getBackendMetastores();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts"></a>

```java
public GoogleDataprocMetastoreFederationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `backendMetastoresInput`<sup>Optional</sup> <a name="backendMetastoresInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput"></a>

```java
public IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores> getBackendMetastoresInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `federationIdInput`<sup>Optional</sup> <a name="federationIdInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput"></a>

```java
public java.lang.String getFederationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataprocMetastoreFederationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId"></a>

```java
public java.lang.String getFederationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreFederationBackendMetastores <a name="GoogleDataprocMetastoreFederationBackendMetastores" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationBackendMetastores;

GoogleDataprocMetastoreFederationBackendMetastores.builder()
    .metastoreType(java.lang.String)
    .name(java.lang.String)
    .rank(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name">name</a></code> | <code>java.lang.String</code> | The relative resource name of the metastore that is being federated. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank">rank</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}. |

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#metastore_type GoogleDataprocMetastoreFederation#metastore_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The relative resource name of the metastore that is being federated.

The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#name GoogleDataprocMetastoreFederation#name}

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank"></a>

```java
public java.lang.String getRank();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}.

---

### GoogleDataprocMetastoreFederationConfig <a name="GoogleDataprocMetastoreFederationConfig" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationConfig;

GoogleDataprocMetastoreFederationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backendMetastores(IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores>)
    .federationId(java.lang.String)
    .version(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleDataprocMetastoreFederationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores">backendMetastores</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>></code> | backend_metastores block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId">federationId</a></code> | <code>java.lang.String</code> | The ID of the metastore federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendMetastores`<sup>Required</sup> <a name="backendMetastores" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores"></a>

```java
public IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores> getBackendMetastores();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>>

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId"></a>

```java
public java.lang.String getFederationId();
```

- *Type:* java.lang.String

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#deletion_policy GoogleDataprocMetastoreFederation#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the federation.

Defaults to false.
When the field is set to true in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the federation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#deletion_protection GoogleDataprocMetastoreFederation#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#tags GoogleDataprocMetastoreFederation#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts"></a>

```java
public GoogleDataprocMetastoreFederationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}

---

### GoogleDataprocMetastoreFederationTimeouts <a name="GoogleDataprocMetastoreFederationTimeouts" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationTimeouts;

GoogleDataprocMetastoreFederationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreFederationBackendMetastoresList <a name="GoogleDataprocMetastoreFederationBackendMetastoresList" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationBackendMetastoresList;

new GoogleDataprocMetastoreFederationBackendMetastoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get"></a>

```java
public GoogleDataprocMetastoreFederationBackendMetastoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataprocMetastoreFederationBackendMetastores> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>>

---


### GoogleDataprocMetastoreFederationBackendMetastoresOutputReference <a name="GoogleDataprocMetastoreFederationBackendMetastoresOutputReference" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference;

new GoogleDataprocMetastoreFederationBackendMetastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput">metastoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput">rankInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank">rank</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreTypeInput`<sup>Optional</sup> <a name="metastoreTypeInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput"></a>

```java
public java.lang.String getMetastoreTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput"></a>

```java
public java.lang.String getRankInput();
```

- *Type:* java.lang.String

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank"></a>

```java
public java.lang.String getRank();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataprocMetastoreFederationBackendMetastores getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>

---


### GoogleDataprocMetastoreFederationTimeoutsOutputReference <a name="GoogleDataprocMetastoreFederationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataproc_metastore_federation.GoogleDataprocMetastoreFederationTimeoutsOutputReference;

new GoogleDataprocMetastoreFederationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataprocMetastoreFederationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

---



