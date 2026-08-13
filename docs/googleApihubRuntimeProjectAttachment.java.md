# `googleApihubRuntimeProjectAttachment` Submodule <a name="`googleApihubRuntimeProjectAttachment` Submodule" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubRuntimeProjectAttachment <a name="GoogleApihubRuntimeProjectAttachment" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment google_apihub_runtime_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachment;

GoogleApihubRuntimeProjectAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .runtimeProject(java.lang.String)
    .runtimeProjectAttachmentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubRuntimeProjectAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject">runtimeProject</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId">runtimeProjectAttachmentId</a></code> | <code>java.lang.String</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#location GoogleApihubRuntimeProjectAttachment#location}

---

##### `runtimeProject`<sup>Required</sup> <a name="runtimeProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject"></a>

- *Type:* java.lang.String

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project GoogleApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtimeProjectAttachmentId`<sup>Required</sup> <a name="runtimeProjectAttachmentId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId"></a>

- *Type:* java.lang.String

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project_attachment_id GoogleApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#deletion_policy GoogleApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#timeouts GoogleApihubRuntimeProjectAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts"></a>

```java
public void putTimeouts(GoogleApihubRuntimeProjectAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachment;

GoogleApihubRuntimeProjectAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachment;

GoogleApihubRuntimeProjectAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachment;

GoogleApihubRuntimeProjectAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachment;

GoogleApihubRuntimeProjectAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApihubRuntimeProjectAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApihubRuntimeProjectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApihubRuntimeProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApihubRuntimeProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput">runtimeProjectAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput">runtimeProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject">runtimeProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId">runtimeProjectAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts"></a>

```java
public GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `runtimeProjectAttachmentIdInput`<sup>Optional</sup> <a name="runtimeProjectAttachmentIdInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput"></a>

```java
public java.lang.String getRuntimeProjectAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `runtimeProjectInput`<sup>Optional</sup> <a name="runtimeProjectInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput"></a>

```java
public java.lang.String getRuntimeProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApihubRuntimeProjectAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `runtimeProject`<sup>Required</sup> <a name="runtimeProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject"></a>

```java
public java.lang.String getRuntimeProject();
```

- *Type:* java.lang.String

---

##### `runtimeProjectAttachmentId`<sup>Required</sup> <a name="runtimeProjectAttachmentId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId"></a>

```java
public java.lang.String getRuntimeProjectAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubRuntimeProjectAttachmentConfig <a name="GoogleApihubRuntimeProjectAttachmentConfig" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachmentConfig;

GoogleApihubRuntimeProjectAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .runtimeProject(java.lang.String)
    .runtimeProjectAttachmentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApihubRuntimeProjectAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject">runtimeProject</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId">runtimeProjectAttachmentId</a></code> | <code>java.lang.String</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#location GoogleApihubRuntimeProjectAttachment#location}

---

##### `runtimeProject`<sup>Required</sup> <a name="runtimeProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject"></a>

```java
public java.lang.String getRuntimeProject();
```

- *Type:* java.lang.String

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project GoogleApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtimeProjectAttachmentId`<sup>Required</sup> <a name="runtimeProjectAttachmentId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId"></a>

```java
public java.lang.String getRuntimeProjectAttachmentId();
```

- *Type:* java.lang.String

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project_attachment_id GoogleApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#deletion_policy GoogleApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts"></a>

```java
public GoogleApihubRuntimeProjectAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#timeouts GoogleApihubRuntimeProjectAttachment#timeouts}

---

### GoogleApihubRuntimeProjectAttachmentTimeouts <a name="GoogleApihubRuntimeProjectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachmentTimeouts;

GoogleApihubRuntimeProjectAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference <a name="GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apihub_runtime_project_attachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference;

new GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApihubRuntimeProjectAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---



