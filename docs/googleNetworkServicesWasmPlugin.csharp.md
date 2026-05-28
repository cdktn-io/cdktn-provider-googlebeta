# `googleNetworkServicesWasmPlugin` Submodule <a name="`googleNetworkServicesWasmPlugin` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesWasmPlugin <a name="GoogleNetworkServicesWasmPlugin" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPlugin(Construct Scope, string Id, GoogleNetworkServicesWasmPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig">GoogleNetworkServicesWasmPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig">GoogleNetworkServicesWasmPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig"></a>

```csharp
private void PutLogConfig(GoogleNetworkServicesWasmPluginLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesWasmPluginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `PutVersions` <a name="PutVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions"></a>

```csharp
private void PutVersions(IResolvable|GoogleNetworkServicesWasmPluginVersions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesWasmPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesWasmPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesWasmPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesWasmPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesWasmPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy">UsedBy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput">MainVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput">VersionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId">MainVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig"></a>

```csharp
public GoogleNetworkServicesWasmPluginLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts"></a>

```csharp
public GoogleNetworkServicesWasmPluginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UsedBy`<sup>Required</sup> <a name="UsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy"></a>

```csharp
public GoogleNetworkServicesWasmPluginUsedByList UsedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions"></a>

```csharp
public GoogleNetworkServicesWasmPluginVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput"></a>

```csharp
public GoogleNetworkServicesWasmPluginLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `MainVersionIdInput`<sup>Optional</sup> <a name="MainVersionIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```csharp
public string MainVersionIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginVersions[] VersionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId"></a>

```csharp
public string MainVersionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesWasmPluginConfig <a name="GoogleNetworkServicesWasmPluginConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MainVersionId,
    string Name,
    IResolvable|GoogleNetworkServicesWasmPluginVersions[] Versions,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    GoogleNetworkServicesWasmPluginLogConfig LogConfig = null,
    string Project = null,
    GoogleNetworkServicesWasmPluginTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId">MainVersionId</a></code> | <code>string</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name">Name</a></code> | <code>string</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions">Versions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]</code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location">Location</a></code> | <code>string</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```csharp
public string MainVersionId { get; set; }
```

- *Type:* string

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginVersions[] Versions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#deletion_policy GoogleNetworkServicesWasmPlugin#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig"></a>

```csharp
public GoogleNetworkServicesWasmPluginLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesWasmPluginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

### GoogleNetworkServicesWasmPluginLogConfig <a name="GoogleNetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginLogConfig {
    bool|IResolvable Enable = null,
    string MinLogLevel = null,
    double SampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel">MinLogLevel</a></code> | <code>string</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate">SampleRate</a></code> | <code>double</code> | Non-empty default. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#enable GoogleNetworkServicesWasmPlugin#enable}

---

##### `MinLogLevel`<sup>Optional</sup> <a name="MinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```csharp
public string MinLogLevel { get; set; }
```

- *Type:* string

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#min_log_level GoogleNetworkServicesWasmPlugin#min_log_level}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```csharp
public double SampleRate { get; set; }
```

- *Type:* double

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#sample_rate GoogleNetworkServicesWasmPlugin#sample_rate}

---

### GoogleNetworkServicesWasmPluginTimeouts <a name="GoogleNetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}.

---

### GoogleNetworkServicesWasmPluginUsedBy <a name="GoogleNetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginUsedBy {

};
```


### GoogleNetworkServicesWasmPluginVersions <a name="GoogleNetworkServicesWasmPluginVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginVersions {
    string VersionName,
    string Description = null,
    string ImageUri = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string PluginConfigData = null,
    string PluginConfigUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description">Description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri">ImageUri</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData">PluginConfigData</a></code> | <code>string</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri">PluginConfigUri</a></code> | <code>string</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#image_uri GoogleNetworkServicesWasmPlugin#image_uri}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `PluginConfigData`<sup>Optional</sup> <a name="PluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```csharp
public string PluginConfigData { get; set; }
```

- *Type:* string

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#plugin_config_data GoogleNetworkServicesWasmPlugin#plugin_config_data}

---

##### `PluginConfigUri`<sup>Optional</sup> <a name="PluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```csharp
public string PluginConfigUri { get; set; }
```

- *Type:* string

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#plugin_config_uri GoogleNetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesWasmPluginLogConfigOutputReference <a name="GoogleNetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">ResetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetMinLogLevel` <a name="ResetMinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```csharp
private void ResetMinLogLevel()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```csharp
private void ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">MinLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">MinLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```csharp
public bool|IResolvable EnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLogLevelInput`<sup>Optional</sup> <a name="MinLogLevelInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```csharp
public string MinLogLevelInput { get; }
```

- *Type:* string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```csharp
public double SampleRateInput { get; }
```

- *Type:* double

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLogLevel`<sup>Required</sup> <a name="MinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```csharp
public string MinLogLevel { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesWasmPluginLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---


### GoogleNetworkServicesWasmPluginTimeoutsOutputReference <a name="GoogleNetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---


### GoogleNetworkServicesWasmPluginUsedByList <a name="GoogleNetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginUsedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get"></a>

```csharp
private GoogleNetworkServicesWasmPluginUsedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkServicesWasmPluginUsedByOutputReference <a name="GoogleNetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginUsedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesWasmPluginUsedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a>

---


### GoogleNetworkServicesWasmPluginVersionsList <a name="GoogleNetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get"></a>

```csharp
private GoogleNetworkServicesWasmPluginVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginVersions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>[]

---


### GoogleNetworkServicesWasmPluginVersionsOutputReference <a name="GoogleNetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesWasmPluginVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">ResetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">ResetPluginConfigUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPluginConfigData` <a name="ResetPluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```csharp
private void ResetPluginConfigData()
```

##### `ResetPluginConfigUri` <a name="ResetPluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```csharp
private void ResetPluginConfigUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">PluginConfigDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">PluginConfigDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">PluginConfigUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">PluginConfigData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">PluginConfigUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `PluginConfigDigest`<sup>Required</sup> <a name="PluginConfigDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```csharp
public string PluginConfigDigest { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginConfigDataInput`<sup>Optional</sup> <a name="PluginConfigDataInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```csharp
public string PluginConfigDataInput { get; }
```

- *Type:* string

---

##### `PluginConfigUriInput`<sup>Optional</sup> <a name="PluginConfigUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```csharp
public string PluginConfigUriInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginConfigData`<sup>Required</sup> <a name="PluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```csharp
public string PluginConfigData { get; }
```

- *Type:* string

---

##### `PluginConfigUri`<sup>Required</sup> <a name="PluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```csharp
public string PluginConfigUri { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesWasmPluginVersions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>

---



