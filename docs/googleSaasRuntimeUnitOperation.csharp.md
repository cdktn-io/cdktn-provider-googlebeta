# `googleSaasRuntimeUnitOperation` Submodule <a name="`googleSaasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitOperation <a name="GoogleSaasRuntimeUnitOperation" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperation(Construct Scope, string Id, GoogleSaasRuntimeUnitOperationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig">GoogleSaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision">PutDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision">PutProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision">ResetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision">ResetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade">ResetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion">ResetWaitForCompletion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeprovision` <a name="PutDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision"></a>

```csharp
private void PutDeprovision(GoogleSaasRuntimeUnitOperationDeprovision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `PutProvision` <a name="PutProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision"></a>

```csharp
private void PutProvision(GoogleSaasRuntimeUnitOperationProvision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSaasRuntimeUnitOperationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade"></a>

```csharp
private void PutUpgrade(GoogleSaasRuntimeUnitOperationUpgrade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeprovision` <a name="ResetDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision"></a>

```csharp
private void ResetDeprovision()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProvision` <a name="ResetProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision"></a>

```csharp
private void ResetProvision()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgrade` <a name="ResetUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade"></a>

```csharp
private void ResetUpgrade()
```

##### `ResetWaitForCompletion` <a name="ResetWaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```csharp
private void ResetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeUnitOperation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeUnitOperation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeUnitOperation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeUnitOperation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeUnitOperation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState">EngineState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory">ErrorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput">DeprovisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput">ProvisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput">UnitOperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput">WaitForCompletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId">UnitOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion">WaitForCompletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions"></a>

```csharp
public GoogleSaasRuntimeUnitOperationConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deprovision`<sup>Required</sup> <a name="Deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision"></a>

```csharp
public GoogleSaasRuntimeUnitOperationDeprovisionOutputReference Deprovision { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EngineState`<sup>Required</sup> <a name="EngineState" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState"></a>

```csharp
public string EngineState { get; }
```

- *Type:* string

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory"></a>

```csharp
public string ErrorCategory { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provision`<sup>Required</sup> <a name="Provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision"></a>

```csharp
public GoogleSaasRuntimeUnitOperationProvisionOutputReference Provision { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts"></a>

```csharp
public GoogleSaasRuntimeUnitOperationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade"></a>

```csharp
public GoogleSaasRuntimeUnitOperationUpgradeOutputReference Upgrade { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeprovisionInput`<sup>Optional</sup> <a name="DeprovisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput"></a>

```csharp
public GoogleSaasRuntimeUnitOperationDeprovision DeprovisionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvisionInput`<sup>Optional</sup> <a name="ProvisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput"></a>

```csharp
public GoogleSaasRuntimeUnitOperationProvision ProvisionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `UnitOperationIdInput`<sup>Optional</sup> <a name="UnitOperationIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```csharp
public string UnitOperationIdInput { get; }
```

- *Type:* string

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput"></a>

```csharp
public GoogleSaasRuntimeUnitOperationUpgrade UpgradeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `WaitForCompletionInput`<sup>Optional</sup> <a name="WaitForCompletionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```csharp
public bool|IResolvable WaitForCompletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId"></a>

```csharp
public string UnitOperationId { get; }
```

- *Type:* string

---

##### `WaitForCompletion`<sup>Required</sup> <a name="WaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion"></a>

```csharp
public bool|IResolvable WaitForCompletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitOperationConditions <a name="GoogleSaasRuntimeUnitOperationConditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationConditions {

};
```


### GoogleSaasRuntimeUnitOperationConfig <a name="GoogleSaasRuntimeUnitOperationConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Unit,
    string UnitOperationId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleSaasRuntimeUnitOperationDeprovision Deprovision = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleSaasRuntimeUnitOperationProvision Provision = null,
    GoogleSaasRuntimeUnitOperationTimeouts Timeouts = null,
    GoogleSaasRuntimeUnitOperationUpgrade Upgrade = null,
    bool|IResolvable WaitForCompletion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit">Unit</a></code> | <code>string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId">UnitOperationId</a></code> | <code>string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion">WaitForCompletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```csharp
public string UnitOperationId { get; set; }
```

- *Type:* string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}

---

##### `Deprovision`<sup>Optional</sup> <a name="Deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision"></a>

```csharp
public GoogleSaasRuntimeUnitOperationDeprovision Deprovision { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}.

---

##### `Provision`<sup>Optional</sup> <a name="Provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision"></a>

```csharp
public GoogleSaasRuntimeUnitOperationProvision Provision { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts"></a>

```csharp
public GoogleSaasRuntimeUnitOperationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}

---

##### `Upgrade`<sup>Optional</sup> <a name="Upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade"></a>

```csharp
public GoogleSaasRuntimeUnitOperationUpgrade Upgrade { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}

---

##### `WaitForCompletion`<sup>Optional</sup> <a name="WaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```csharp
public bool|IResolvable WaitForCompletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}

---

### GoogleSaasRuntimeUnitOperationDeprovision <a name="GoogleSaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationDeprovision {

};
```


### GoogleSaasRuntimeUnitOperationProvision <a name="GoogleSaasRuntimeUnitOperationProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationProvision {
    IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables[] InputVariables = null,
    string Release = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables">InputVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release">Release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables[] InputVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release"></a>

```csharp
public string Release { get; set; }
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationProvisionInputVariables <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationProvisionInputVariables {
    string Variable,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable">Variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type">Type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value">Value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

### GoogleSaasRuntimeUnitOperationTimeouts <a name="GoogleSaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}.

---

### GoogleSaasRuntimeUnitOperationUpgrade <a name="GoogleSaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationUpgrade {
    IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] InputVariables = null,
    string Release = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables">InputVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release">Release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] InputVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release"></a>

```csharp
public string Release { get; set; }
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationUpgradeInputVariables <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationUpgradeInputVariables {
    string Variable,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable">Variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type">Type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value">Value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitOperationConditionsList <a name="GoogleSaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get"></a>

```csharp
private GoogleSaasRuntimeUnitOperationConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleSaasRuntimeUnitOperationConditionsOutputReference <a name="GoogleSaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleSaasRuntimeUnitOperationConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a>

---


### GoogleSaasRuntimeUnitOperationDeprovisionOutputReference <a name="GoogleSaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationDeprovisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```csharp
public GoogleSaasRuntimeUnitOperationDeprovision InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesList <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationProvisionInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```csharp
private GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationProvisionOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationProvisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```csharp
private void PutInputVariables(IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```csharp
private void ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```csharp
private void ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release">Release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```csharp
public GoogleSaasRuntimeUnitOperationProvisionInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables[] InputVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```csharp
public string ReleaseInput { get; }
```

- *Type:* string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```csharp
public string Release { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```csharp
public GoogleSaasRuntimeUnitOperationProvision InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---


### GoogleSaasRuntimeUnitOperationTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```csharp
private GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeUnitOperationUpgradeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```csharp
private void PutInputVariables(IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```csharp
private void ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```csharp
private void ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release">Release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```csharp
public GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```csharp
public IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] InputVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```csharp
public string ReleaseInput { get; }
```

- *Type:* string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```csharp
public string Release { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```csharp
public GoogleSaasRuntimeUnitOperationUpgrade InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---



