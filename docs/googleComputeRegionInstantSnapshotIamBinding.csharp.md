# `googleComputeRegionInstantSnapshotIamBinding` Submodule <a name="`googleComputeRegionInstantSnapshotIamBinding` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionInstantSnapshotIamBinding <a name="GoogleComputeRegionInstantSnapshotIamBinding" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding google_compute_region_instant_snapshot_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRegionInstantSnapshotIamBinding(Construct Scope, string Id, GoogleComputeRegionInstantSnapshotIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig">GoogleComputeRegionInstantSnapshotIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig">GoogleComputeRegionInstantSnapshotIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleComputeRegionInstantSnapshotIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionInstantSnapshotIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRegionInstantSnapshotIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRegionInstantSnapshotIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRegionInstantSnapshotIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRegionInstantSnapshotIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeRegionInstantSnapshotIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionInstantSnapshotIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionInstantSnapshotIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionInstantSnapshotIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference">GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.condition"></a>

```csharp
public GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference">GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.conditionInput"></a>

```csharp
public GoogleComputeRegionInstantSnapshotIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionInstantSnapshotIamBindingCondition <a name="GoogleComputeRegionInstantSnapshotIamBindingCondition" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRegionInstantSnapshotIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#expression GoogleComputeRegionInstantSnapshotIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#title GoogleComputeRegionInstantSnapshotIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#description GoogleComputeRegionInstantSnapshotIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#expression GoogleComputeRegionInstantSnapshotIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#title GoogleComputeRegionInstantSnapshotIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#description GoogleComputeRegionInstantSnapshotIamBinding#description}.

---

### GoogleComputeRegionInstantSnapshotIamBindingConfig <a name="GoogleComputeRegionInstantSnapshotIamBindingConfig" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRegionInstantSnapshotIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    GoogleComputeRegionInstantSnapshotIamBindingCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#members GoogleComputeRegionInstantSnapshotIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#name GoogleComputeRegionInstantSnapshotIamBinding#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#role GoogleComputeRegionInstantSnapshotIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#id GoogleComputeRegionInstantSnapshotIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#project GoogleComputeRegionInstantSnapshotIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#region GoogleComputeRegionInstantSnapshotIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#members GoogleComputeRegionInstantSnapshotIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#name GoogleComputeRegionInstantSnapshotIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#role GoogleComputeRegionInstantSnapshotIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.condition"></a>

```csharp
public GoogleComputeRegionInstantSnapshotIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#condition GoogleComputeRegionInstantSnapshotIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#id GoogleComputeRegionInstantSnapshotIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#project GoogleComputeRegionInstantSnapshotIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_instant_snapshot_iam_binding#region GoogleComputeRegionInstantSnapshotIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference <a name="GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstantSnapshotIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionInstantSnapshotIamBinding.GoogleComputeRegionInstantSnapshotIamBindingCondition">GoogleComputeRegionInstantSnapshotIamBindingCondition</a>

---



