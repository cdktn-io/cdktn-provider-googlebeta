# `googleDialogflowCxToolVersion` Submodule <a name="`googleDialogflowCxToolVersion` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxToolVersion <a name="GoogleDialogflowCxToolVersion" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version google_dialogflow_cx_tool_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersion;

GoogleDialogflowCxToolVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .tool(GoogleDialogflowCxToolVersionTool)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDialogflowCxToolVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.tool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#deletion_policy GoogleDialogflowCxToolVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxToolVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---

##### `putTool` <a name="putTool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool"></a>

```java
public void putTool(GoogleDialogflowCxToolVersionTool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersion;

GoogleDialogflowCxToolVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersion;

GoogleDialogflowCxToolVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersion;

GoogleDialogflowCxToolVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersion;

GoogleDialogflowCxToolVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxToolVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxToolVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxToolVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxToolVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput">toolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts"></a>

```java
public GoogleDialogflowCxToolVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a>

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool"></a>

```java
public GoogleDialogflowCxToolVersionToolOutputReference getTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDialogflowCxToolVersionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput"></a>

```java
public GoogleDialogflowCxToolVersionTool getToolInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolVersionConfig <a name="GoogleDialogflowCxToolVersionConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionConfig;

GoogleDialogflowCxToolVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .tool(GoogleDialogflowCxToolVersionTool)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDialogflowCxToolVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool"></a>

```java
public GoogleDialogflowCxToolVersionTool getTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#deletion_policy GoogleDialogflowCxToolVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxToolVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}

---

### GoogleDialogflowCxToolVersionTimeouts <a name="GoogleDialogflowCxToolVersionTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionTimeouts;

GoogleDialogflowCxToolVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}.

---

### GoogleDialogflowCxToolVersionTool <a name="GoogleDialogflowCxToolVersionTool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionTool;

GoogleDialogflowCxToolVersionTool.builder()
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .connectorSpec(GoogleDialogflowCxToolVersionToolConnectorSpec)
//  .dataStoreSpec(GoogleDialogflowCxToolVersionToolDataStoreSpec)
//  .functionSpec(GoogleDialogflowCxToolVersionToolFunctionSpec)
//  .openApiSpec(GoogleDialogflowCxToolVersionToolOpenApiSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description">description</a></code> | <code>java.lang.String</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | open_api_spec block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#description GoogleDialogflowCxToolVersion#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpec getConnectorSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#connector_spec GoogleDialogflowCxToolVersion#connector_spec}

---

##### `dataStoreSpec`<sup>Optional</sup> <a name="dataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpec getDataStoreSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_spec GoogleDialogflowCxToolVersion#data_store_spec}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolFunctionSpec getFunctionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#function_spec GoogleDialogflowCxToolVersion#function_spec}

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpec getOpenApiSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#open_api_spec GoogleDialogflowCxToolVersion#open_api_spec}

---

### GoogleDialogflowCxToolVersionToolConnectorSpec <a name="GoogleDialogflowCxToolVersionToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpec;

GoogleDialogflowCxToolVersionToolConnectorSpec.builder()
    .actions(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolConnectorSpecActions>)
    .name(java.lang.String)
//  .endUserAuthConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>></code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name">name</a></code> | <code>java.lang.String</code> | The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig">endUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | end_user_auth_config block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolConnectorSpecActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#actions GoogleDialogflowCxToolVersion#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#name GoogleDialogflowCxToolVersion#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endUserAuthConfig`<sup>Optional</sup> <a name="endUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig getEndUserAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

end_user_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#end_user_auth_config GoogleDialogflowCxToolVersion#end_user_auth_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActions <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecActions;

GoogleDialogflowCxToolVersionToolConnectorSpecActions.builder()
//  .connectionActionId(java.lang.String)
//  .entityOperation(GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation)
//  .inputFields(java.util.List<java.lang.String>)
//  .outputFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId">connectionActionId</a></code> | <code>java.lang.String</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields">inputFields</a></code> | <code>java.util.List<java.lang.String></code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields">outputFields</a></code> | <code>java.util.List<java.lang.String></code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connectionActionId`<sup>Optional</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId"></a>

```java
public java.lang.String getConnectionActionId();
```

- *Type:* java.lang.String

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#connection_action_id GoogleDialogflowCxToolVersion#connection_action_id}

---

##### `entityOperation`<sup>Optional</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation getEntityOperation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#entity_operation GoogleDialogflowCxToolVersion#entity_operation}

---

##### `inputFields`<sup>Optional</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields"></a>

```java
public java.util.List<java.lang.String> getInputFields();
```

- *Type:* java.util.List<java.lang.String>

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#input_fields GoogleDialogflowCxToolVersion#input_fields}

---

##### `outputFields`<sup>Optional</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields"></a>

```java
public java.util.List<java.lang.String> getOutputFields();
```

- *Type:* java.util.List<java.lang.String>

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#output_fields GoogleDialogflowCxToolVersion#output_fields}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation;

GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.builder()
    .entityId(java.lang.String)
    .operation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId">entityId</a></code> | <code>java.lang.String</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>java.lang.String</code> | The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"]. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#entity_id GoogleDialogflowCxToolVersion#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#operation GoogleDialogflowCxToolVersion#operation}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig;

GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.builder()
//  .oauth2AuthCodeConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig)
//  .oauth2JwtBearerConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig">oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | oauth2_auth_code_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig">oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | oauth2_jwt_bearer_config block. |

---

##### `oauth2AuthCodeConfig`<sup>Optional</sup> <a name="oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig getOauth2AuthCodeConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_auth_code_config GoogleDialogflowCxToolVersion#oauth2_auth_code_config}

---

##### `oauth2JwtBearerConfig`<sup>Optional</sup> <a name="oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig getOauth2JwtBearerConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_jwt_bearer_config GoogleDialogflowCxToolVersion#oauth2_jwt_bearer_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig;

GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.builder()
    .oauthToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | Oauth token value or parameter name to pass it through. |

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

Oauth token value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_token GoogleDialogflowCxToolVersion#oauth_token}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig;

GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.builder()
    .clientKey(java.lang.String)
    .issuer(java.lang.String)
    .subject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Client key value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Issuer value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject">subject</a></code> | <code>java.lang.String</code> | Subject value or parameter name to pass it through. |

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Client key value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_key GoogleDialogflowCxToolVersion#client_key}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Issuer value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#issuer GoogleDialogflowCxToolVersion#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Subject value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#subject GoogleDialogflowCxToolVersion#subject}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpec <a name="GoogleDialogflowCxToolVersionToolDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpec;

GoogleDialogflowCxToolVersionToolDataStoreSpec.builder()
    .dataStoreConnections(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections>)
    .fallbackPrompt(GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections">dataStoreConnections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>></code> | data_store_connections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections> getDataStoreConnections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>>

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_connections GoogleDialogflowCxToolVersion#data_store_connections}

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt getFallbackPrompt();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#fallback_prompt GoogleDialogflowCxToolVersion#fallback_prompt}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections;

GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.builder()
//  .dataStore(java.lang.String)
//  .dataStoreType(java.lang.String)
//  .documentProcessingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">documentProcessingMode</a></code> | <code>java.lang.String</code> | The document processing mode for the data store connection. |

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store GoogleDialogflowCxToolVersion#data_store}

---

##### `dataStoreType`<sup>Optional</sup> <a name="dataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_type GoogleDialogflowCxToolVersion#data_store_type}

---

##### `documentProcessingMode`<sup>Optional</sup> <a name="documentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```java
public java.lang.String getDocumentProcessingMode();
```

- *Type:* java.lang.String

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#document_processing_mode GoogleDialogflowCxToolVersion#document_processing_mode}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;

GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt.builder()
    .build();
```


### GoogleDialogflowCxToolVersionToolFunctionSpec <a name="GoogleDialogflowCxToolVersionToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolFunctionSpec;

GoogleDialogflowCxToolVersionToolFunctionSpec.builder()
//  .inputSchema(java.lang.String)
//  .outputSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#input_schema GoogleDialogflowCxToolVersion#input_schema}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#output_schema GoogleDialogflowCxToolVersion#output_schema}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpec <a name="GoogleDialogflowCxToolVersionToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpec;

GoogleDialogflowCxToolVersionToolOpenApiSpec.builder()
    .textSchema(java.lang.String)
//  .authentication(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication)
//  .serviceDirectoryConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig)
//  .tlsConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#text_schema GoogleDialogflowCxToolVersion#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#authentication GoogleDialogflowCxToolVersion#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_directory_config GoogleDialogflowCxToolVersion#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#tls_config GoogleDialogflowCxToolVersion#tls_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication;

GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.builder()
//  .apiKeyConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig)
//  .bearerTokenConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig)
//  .oauthConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig)
//  .serviceAgentAuthConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#api_key_config GoogleDialogflowCxToolVersion#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#bearer_token_config GoogleDialogflowCxToolVersion#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_config GoogleDialogflowCxToolVersion#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth_config GoogleDialogflowCxToolVersion#service_agent_auth_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.builder()
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
//  .apiKey(java.lang.String)
//  .secretVersionForApiKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#key_name GoogleDialogflowCxToolVersion#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#request_location GoogleDialogflowCxToolVersion#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#api_key GoogleDialogflowCxToolVersion#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_api_key GoogleDialogflowCxToolVersion#secret_version_for_api_key}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.builder()
//  .secretVersionForToken(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_token GoogleDialogflowCxToolVersion#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#token GoogleDialogflowCxToolVersion#token}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .clientSecret(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretVersionForClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_id GoogleDialogflowCxToolVersion#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_grant_type GoogleDialogflowCxToolVersion#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#token_endpoint GoogleDialogflowCxToolVersion#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_secret GoogleDialogflowCxToolVersion#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#scopes GoogleDialogflowCxToolVersion#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_client_secret GoogleDialogflowCxToolVersion#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.builder()
//  .serviceAgentAuth(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth GoogleDialogflowCxToolVersion#service_agent_auth}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service GoogleDialogflowCxToolVersion#service}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig;

GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.builder()
    .caCerts(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>></code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts> getCaCerts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>>

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#ca_certs GoogleDialogflowCxToolVersion#ca_certs}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts;

GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.builder()
    .cert(java.lang.String)
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>java.lang.String</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#cert GoogleDialogflowCxToolVersion#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolVersionTimeoutsOutputReference <a name="GoogleDialogflowCxToolVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionTimeoutsOutputReference;

new GoogleDialogflowCxToolVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxToolVersionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsList <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList;

new GoogleDialogflowCxToolVersionToolConnectorSpecActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolConnectorSpecActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation">putEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId">resetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation">resetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields">resetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields">resetOutputFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityOperation` <a name="putEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```java
public void putEntityOperation(GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---

##### `resetConnectionActionId` <a name="resetConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```java
public void resetConnectionActionId()
```

##### `resetEntityOperation` <a name="resetEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```java
public void resetEntityOperation()
```

##### `resetInputFields` <a name="resetInputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```java
public void resetInputFields()
```

##### `resetOutputFields` <a name="resetOutputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```java
public void resetOutputFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connectionActionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput">entityOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput">inputFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput">outputFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId">connectionActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields">inputFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields">outputFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityOperation`<sup>Required</sup> <a name="entityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference getEntityOperation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connectionActionIdInput`<sup>Optional</sup> <a name="connectionActionIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```java
public java.lang.String getConnectionActionIdInput();
```

- *Type:* java.lang.String

---

##### `entityOperationInput`<sup>Optional</sup> <a name="entityOperationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation getEntityOperationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---

##### `inputFieldsInput`<sup>Optional</sup> <a name="inputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```java
public java.util.List<java.lang.String> getInputFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFieldsInput`<sup>Optional</sup> <a name="outputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```java
public java.util.List<java.lang.String> getOutputFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionActionId`<sup>Required</sup> <a name="connectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```java
public java.lang.String getConnectionActionId();
```

- *Type:* java.lang.String

---

##### `inputFields`<sup>Required</sup> <a name="inputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```java
public java.util.List<java.lang.String> getInputFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFields`<sup>Required</sup> <a name="outputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```java
public java.util.List<java.lang.String> getOutputFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxToolVersionToolConnectorSpecActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput"></a>

```java
public java.lang.String getOauthTokenInput();
```

- *Type:* java.lang.String

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig">putOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig">putOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig">resetOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig">resetOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2AuthCodeConfig` <a name="putOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig"></a>

```java
public void putOauth2AuthCodeConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `putOauth2JwtBearerConfig` <a name="putOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig"></a>

```java
public void putOauth2JwtBearerConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `resetOauth2AuthCodeConfig` <a name="resetOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig"></a>

```java
public void resetOauth2AuthCodeConfig()
```

##### `resetOauth2JwtBearerConfig` <a name="resetOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig"></a>

```java
public void resetOauth2JwtBearerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig">oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig">oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput">oauth2AuthCodeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput">oauth2JwtBearerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2AuthCodeConfig`<sup>Required</sup> <a name="oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference getOauth2AuthCodeConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a>

---

##### `oauth2JwtBearerConfig`<sup>Required</sup> <a name="oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference getOauth2JwtBearerConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a>

---

##### `oauth2AuthCodeConfigInput`<sup>Optional</sup> <a name="oauth2AuthCodeConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig getOauth2AuthCodeConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `oauth2JwtBearerConfigInput`<sup>Optional</sup> <a name="oauth2JwtBearerConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig getOauth2JwtBearerConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference;

new GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig">putEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig">resetEndUserAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolConnectorSpecActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>>

---

##### `putEndUserAuthConfig` <a name="putEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig"></a>

```java
public void putEndUserAuthConfig(GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---

##### `resetEndUserAuthConfig` <a name="resetEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig"></a>

```java
public void resetEndUserAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig">endUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput">endUserAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a>

---

##### `endUserAuthConfig`<sup>Required</sup> <a name="endUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference getEndUserAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolConnectorSpecActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>>

---

##### `endUserAuthConfigInput`<sup>Optional</sup> <a name="endUserAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig getEndUserAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList;

new GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference;

new GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">resetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">resetDocumentProcessingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataStore` <a name="resetDataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```java
public void resetDataStore()
```

##### `resetDataStoreType` <a name="resetDataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```java
public void resetDataStoreType()
```

##### `resetDocumentProcessingMode` <a name="resetDocumentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```java
public void resetDocumentProcessingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">documentProcessingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">documentProcessingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```java
public java.lang.String getDataStoreTypeInput();
```

- *Type:* java.lang.String

---

##### `documentProcessingModeInput`<sup>Optional</sup> <a name="documentProcessingModeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```java
public java.lang.String getDocumentProcessingModeInput();
```

- *Type:* java.lang.String

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```java
public java.lang.String getDataStoreType();
```

- *Type:* java.lang.String

---

##### `documentProcessingMode`<sup>Required</sup> <a name="documentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```java
public java.lang.String getDocumentProcessingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference;

new GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference;

new GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections">putDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt">putFallbackPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreConnections` <a name="putDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```java
public void putDataStoreConnections(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>>

---

##### `putFallbackPrompt` <a name="putFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```java
public void putFallbackPrompt(GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections">dataStoreConnections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">dataStoreConnectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallbackPromptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList getDataStoreConnections();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference getFallbackPrompt();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `dataStoreConnectionsInput`<sup>Optional</sup> <a name="dataStoreConnectionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections> getDataStoreConnectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>>

---

##### `fallbackPromptInput`<sup>Optional</sup> <a name="fallbackPromptInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt getFallbackPromptInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference;

new GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema"></a>

```java
public void resetInputSchema()
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema"></a>

```java
public void resetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```java
public java.lang.String getInputSchemaInput();
```

- *Type:* java.lang.String

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```java
public java.lang.String getOutputSchemaInput();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolFunctionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```java
public void resetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```java
public java.lang.String getSecretVersionForApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```java
public void resetSecretVersionForToken()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```java
public java.lang.String getSecretVersionForTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```java
public void resetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```java
public java.lang.String getSecretVersionForClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```java
public void putServiceAgentAuthConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```java
public void resetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```java
public void resetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```java
public java.lang.String getServiceAgentAuthInput();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication"></a>

```java
public void putAuthentication(GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication getAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```java
public java.lang.String getTextSchemaInput();
```

- *Type:* java.lang.String

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList;

new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference;

new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```java
public void putCaCerts(IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts> getCaCertsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolVersionToolOutputReference <a name="GoogleDialogflowCxToolVersionToolOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_tool_version.GoogleDialogflowCxToolVersionToolOutputReference;

new GoogleDialogflowCxToolVersionToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec">putConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec">putDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec">resetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec">resetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectorSpec` <a name="putConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec"></a>

```java
public void putConnectorSpec(GoogleDialogflowCxToolVersionToolConnectorSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---

##### `putDataStoreSpec` <a name="putDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec"></a>

```java
public void putDataStoreSpec(GoogleDialogflowCxToolVersionToolDataStoreSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec"></a>

```java
public void putFunctionSpec(GoogleDialogflowCxToolVersionToolFunctionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec"></a>

```java
public void putOpenApiSpec(GoogleDialogflowCxToolVersionToolOpenApiSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `resetConnectorSpec` <a name="resetConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec"></a>

```java
public void resetConnectorSpec()
```

##### `resetDataStoreSpec` <a name="resetDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec"></a>

```java
public void resetDataStoreSpec()
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec"></a>

```java
public void resetFunctionSpec()
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec"></a>

```java
public void resetOpenApiSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType">toolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput">connectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput">dataStoreSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorSpec`<sup>Required</sup> <a name="connectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference getConnectorSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a>

---

##### `dataStoreSpec`<sup>Required</sup> <a name="dataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference getDataStoreSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a>

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference getFunctionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference getOpenApiSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a>

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType"></a>

```java
public java.lang.String getToolType();
```

- *Type:* java.lang.String

---

##### `connectorSpecInput`<sup>Optional</sup> <a name="connectorSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput"></a>

```java
public GoogleDialogflowCxToolVersionToolConnectorSpec getConnectorSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---

##### `dataStoreSpecInput`<sup>Optional</sup> <a name="dataStoreSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput"></a>

```java
public GoogleDialogflowCxToolVersionToolDataStoreSpec getDataStoreSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput"></a>

```java
public GoogleDialogflowCxToolVersionToolFunctionSpec getFunctionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput"></a>

```java
public GoogleDialogflowCxToolVersionToolOpenApiSpec getOpenApiSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxToolVersionTool getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---



