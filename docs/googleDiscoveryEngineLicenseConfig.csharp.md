# `googleDiscoveryEngineLicenseConfig` Submodule <a name="`googleDiscoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineLicenseConfig <a name="GoogleDiscoveryEngineLicenseConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfig(Construct Scope, string Id, GoogleDiscoveryEngineLicenseConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig">GoogleDiscoveryEngineLicenseConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig">GoogleDiscoveryEngineLicenseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial">ResetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate"></a>

```csharp
private void PutEndDate(GoogleDiscoveryEngineLicenseConfigEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate"></a>

```csharp
private void PutStartDate(GoogleDiscoveryEngineLicenseConfigStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineLicenseConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```csharp
private void ResetAutoRenew()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetFreeTrial` <a name="ResetFreeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```csharp
private void ResetFreeTrial()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineLicenseConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineLicenseConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineLicenseConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineLicenseConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineLicenseConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput">AutoRenewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput">FreeTrialInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput">LicenseConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput">LicenseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput">SubscriptionTermInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput">SubscriptionTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial">FreeTrial</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```csharp
public bool|IResolvable AutoRenewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `FreeTrialInput`<sup>Optional</sup> <a name="FreeTrialInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```csharp
public bool|IResolvable FreeTrialInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseConfigIdInput`<sup>Optional</sup> <a name="LicenseConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```csharp
public string LicenseConfigIdInput { get; }
```

- *Type:* string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```csharp
public double LicenseCountInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `SubscriptionTermInput`<sup>Optional</sup> <a name="SubscriptionTermInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```csharp
public string SubscriptionTermInput { get; }
```

- *Type:* string

---

##### `SubscriptionTierInput`<sup>Optional</sup> <a name="SubscriptionTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```csharp
public string SubscriptionTierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineLicenseConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FreeTrial`<sup>Required</sup> <a name="FreeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial"></a>

```csharp
public bool|IResolvable FreeTrial { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```csharp
public string LicenseConfigId { get; }
```

- *Type:* string

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```csharp
public string SubscriptionTerm { get; }
```

- *Type:* string

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```csharp
public string SubscriptionTier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineLicenseConfigConfig <a name="GoogleDiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LicenseConfigId,
    double LicenseCount,
    string Location,
    GoogleDiscoveryEngineLicenseConfigStartDate StartDate,
    string SubscriptionTerm,
    string SubscriptionTier,
    bool|IResolvable AutoRenew = null,
    GoogleDiscoveryEngineLicenseConfigEndDate EndDate = null,
    bool|IResolvable FreeTrial = null,
    string Id = null,
    string Project = null,
    GoogleDiscoveryEngineLicenseConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId">LicenseConfigId</a></code> | <code>string</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">SubscriptionTerm</a></code> | <code>string</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier">SubscriptionTier</a></code> | <code>string</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial">FreeTrial</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LicenseConfigId`<sup>Required</sup> <a name="LicenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```csharp
public string LicenseConfigId { get; set; }
```

- *Type:* string

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; set; }
```

- *Type:* double

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `SubscriptionTerm`<sup>Required</sup> <a name="SubscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```csharp
public string SubscriptionTerm { get; set; }
```

- *Type:* string

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `SubscriptionTier`<sup>Required</sup> <a name="SubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```csharp
public string SubscriptionTier { get; set; }
```

- *Type:* string

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `FreeTrial`<sup>Optional</sup> <a name="FreeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```csharp
public bool|IResolvable FreeTrial { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

### GoogleDiscoveryEngineLicenseConfigEndDate <a name="GoogleDiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigEndDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigStartDate <a name="GoogleDiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigStartDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigTimeouts <a name="GoogleDiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineLicenseConfigEndDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---


### GoogleDiscoveryEngineLicenseConfigStartDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineLicenseConfigStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---


### GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineLicenseConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---



