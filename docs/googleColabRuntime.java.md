# `googleColabRuntime` Submodule <a name="`googleColabRuntime` Submodule" id="@cdktn/provider-google-beta.googleColabRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntime <a name="GoogleColabRuntime" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime google_colab_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntime;

GoogleColabRuntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .runtimeUser(java.lang.String)
//  .autoUpgrade(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .notebookRuntimeTemplateRef(GoogleColabRuntimeNotebookRuntimeTemplateRef)
//  .project(java.lang.String)
//  .timeouts(GoogleColabRuntimeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.runtimeUser">runtimeUser</a></code> | <code>java.lang.String</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.notebookRuntimeTemplateRef">notebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#display_name GoogleColabRuntime#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#location GoogleColabRuntime#location}

---

##### `runtimeUser`<sup>Required</sup> <a name="runtimeUser" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.runtimeUser"></a>

- *Type:* java.lang.String

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#runtime_user GoogleColabRuntime#runtime_user}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.autoUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#auto_upgrade GoogleColabRuntime#auto_upgrade}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#deletion_policy GoogleColabRuntime#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#description GoogleColabRuntime#description}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#desired_state GoogleColabRuntime#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#name GoogleColabRuntime#name}

---

##### `notebookRuntimeTemplateRef`<sup>Optional</sup> <a name="notebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.notebookRuntimeTemplateRef"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#notebook_runtime_template_ref GoogleColabRuntime#notebook_runtime_template_ref}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#timeouts GoogleColabRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef">putNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetNotebookRuntimeTemplateRef">resetNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotebookRuntimeTemplateRef` <a name="putNotebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef"></a>

```java
public void putNotebookRuntimeTemplateRef(GoogleColabRuntimeNotebookRuntimeTemplateRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts"></a>

```java
public void putTimeouts(GoogleColabRuntimeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetAutoUpgrade"></a>

```java
public void resetAutoUpgrade()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetName"></a>

```java
public void resetName()
```

##### `resetNotebookRuntimeTemplateRef` <a name="resetNotebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetNotebookRuntimeTemplateRef"></a>

```java
public void resetNotebookRuntimeTemplateRef()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleColabRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntime;

GoogleColabRuntime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntime;

GoogleColabRuntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntime;

GoogleColabRuntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntime;

GoogleColabRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleColabRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleColabRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleColabRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleColabRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.isUpgradable">isUpgradable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRef">notebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference">GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeType">notebookRuntimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference">GoogleColabRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRefInput">notebookRuntimeTemplateRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUserInput">runtimeUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUser">runtimeUser</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `isUpgradable`<sup>Required</sup> <a name="isUpgradable" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.isUpgradable"></a>

```java
public IResolvable getIsUpgradable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `notebookRuntimeTemplateRef`<sup>Required</sup> <a name="notebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRef"></a>

```java
public GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference getNotebookRuntimeTemplateRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference">GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference</a>

---

##### `notebookRuntimeType`<sup>Required</sup> <a name="notebookRuntimeType" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeType"></a>

```java
public java.lang.String getNotebookRuntimeType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeouts"></a>

```java
public GoogleColabRuntimeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference">GoogleColabRuntimeTimeoutsOutputReference</a>

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateRefInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateRefInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRefInput"></a>

```java
public GoogleColabRuntimeNotebookRuntimeTemplateRef getNotebookRuntimeTemplateRefInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `runtimeUserInput`<sup>Optional</sup> <a name="runtimeUserInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUserInput"></a>

```java
public java.lang.String getRuntimeUserInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeoutsInput"></a>

```java
public IResolvable|GoogleColabRuntimeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `runtimeUser`<sup>Required</sup> <a name="runtimeUser" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUser"></a>

```java
public java.lang.String getRuntimeUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeConfig <a name="GoogleColabRuntimeConfig" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntimeConfig;

GoogleColabRuntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .runtimeUser(java.lang.String)
//  .autoUpgrade(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .notebookRuntimeTemplateRef(GoogleColabRuntimeNotebookRuntimeTemplateRef)
//  .project(java.lang.String)
//  .timeouts(GoogleColabRuntimeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.runtimeUser">runtimeUser</a></code> | <code>java.lang.String</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.notebookRuntimeTemplateRef">notebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#display_name GoogleColabRuntime#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#location GoogleColabRuntime#location}

---

##### `runtimeUser`<sup>Required</sup> <a name="runtimeUser" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.runtimeUser"></a>

```java
public java.lang.String getRuntimeUser();
```

- *Type:* java.lang.String

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#runtime_user GoogleColabRuntime#runtime_user}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.autoUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#auto_upgrade GoogleColabRuntime#auto_upgrade}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#deletion_policy GoogleColabRuntime#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#description GoogleColabRuntime#description}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#desired_state GoogleColabRuntime#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#name GoogleColabRuntime#name}

---

##### `notebookRuntimeTemplateRef`<sup>Optional</sup> <a name="notebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.notebookRuntimeTemplateRef"></a>

```java
public GoogleColabRuntimeNotebookRuntimeTemplateRef getNotebookRuntimeTemplateRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#notebook_runtime_template_ref GoogleColabRuntime#notebook_runtime_template_ref}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.timeouts"></a>

```java
public GoogleColabRuntimeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#timeouts GoogleColabRuntime#timeouts}

---

### GoogleColabRuntimeNotebookRuntimeTemplateRef <a name="GoogleColabRuntimeNotebookRuntimeTemplateRef" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntimeNotebookRuntimeTemplateRef;

GoogleColabRuntimeNotebookRuntimeTemplateRef.builder()
    .notebookRuntimeTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate">notebookRuntimeTemplate</a></code> | <code>java.lang.String</code> | The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created. |

---

##### `notebookRuntimeTemplate`<sup>Required</sup> <a name="notebookRuntimeTemplate" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate"></a>

```java
public java.lang.String getNotebookRuntimeTemplate();
```

- *Type:* java.lang.String

The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#notebook_runtime_template GoogleColabRuntime#notebook_runtime_template}

---

### GoogleColabRuntimeTimeouts <a name="GoogleColabRuntimeTimeouts" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntimeTimeouts;

GoogleColabRuntimeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#create GoogleColabRuntime#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#delete GoogleColabRuntime#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#update GoogleColabRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#create GoogleColabRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#delete GoogleColabRuntime#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_colab_runtime#update GoogleColabRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference <a name="GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference;

new GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput">notebookRuntimeTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate">notebookRuntimeTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput"></a>

```java
public java.lang.String getNotebookRuntimeTemplateInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplate`<sup>Required</sup> <a name="notebookRuntimeTemplate" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate"></a>

```java
public java.lang.String getNotebookRuntimeTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeNotebookRuntimeTemplateRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---


### GoogleColabRuntimeTimeoutsOutputReference <a name="GoogleColabRuntimeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_colab_runtime.GoogleColabRuntimeTimeoutsOutputReference;

new GoogleColabRuntimeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleColabRuntimeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---



