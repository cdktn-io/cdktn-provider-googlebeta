# `googleComputeSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotRecycleBinPolicy <a name="GoogleComputeSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy google_compute_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicy(Construct Scope, string Id, GoogleComputeSnapshotRecycleBinPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeSnapshotRecycleBinPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeSnapshotRecycleBinPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeSnapshotRecycleBinPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeSnapshotRecycleBinPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeSnapshotRecycleBinPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeSnapshotRecycleBinPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules">SystemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a>

---

##### `SystemRules`<sup>Required</sup> <a name="SystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicySystemRulesList SystemRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotRecycleBinPolicyConfig <a name="GoogleComputeSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Project = null,
    IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules[] Rules = null,
    GoogleComputeSnapshotRecycleBinPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#rules GoogleComputeSnapshotRecycleBinPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#timeouts GoogleComputeSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeSnapshotRecycleBinPolicyRules <a name="GoogleComputeSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyRules {
    string Name,
    GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}.

---

##### `StandardSnapshots`<sup>Optional</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshots { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots {
    double RetentionDurationDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `RetentionDurationDays`<sup>Optional</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; set; }
```

- *Type:* double

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRules {

};
```


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots {

};
```


### GoogleComputeSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get"></a>

```csharp
private GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>[]

---


### GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">PutStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">ResetStandardSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSnapshots` <a name="PutStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```csharp
private void PutStandardSnapshots(GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `ResetStandardSnapshots` <a name="ResetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```csharp
private void ResetStandardSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">StandardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference StandardSnapshots { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StandardSnapshotsInput`<sup>Optional</sup> <a name="StandardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshotsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">ResetRetentionDurationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationDays` <a name="ResetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```csharp
private void ResetRetentionDurationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">RetentionDurationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDurationDaysInput`<sup>Optional</sup> <a name="RetentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```csharp
public double RetentionDurationDaysInput { get; }
```

- *Type:* double

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get"></a>

```csharp
private GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList StandardSnapshots { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicySystemRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```csharp
private GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeSnapshotRecycleBinPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---



