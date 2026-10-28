# `googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicy <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicy(Construct Scope, string Id, GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules">SystemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a>

---

##### `SystemRules`<sup>Required</sup> <a name="SystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList SystemRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Organization,
    string Id = null,
    IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] Rules = null,
    GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRules {
    string Name,
    GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}.

---

##### `StandardSnapshots`<sup>Optional</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshots { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots {
    double RetentionDurationDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `RetentionDurationDays`<sup>Optional</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; set; }
```

- *Type:* double

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules {

};
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots {

};
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get"></a>

```csharp
private GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>[]

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">PutStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">ResetStandardSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSnapshots` <a name="PutStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```csharp
private void PutStandardSnapshots(GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `ResetStandardSnapshots` <a name="ResetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```csharp
private void ResetStandardSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">StandardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference StandardSnapshots { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StandardSnapshotsInput`<sup>Optional</sup> <a name="StandardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots StandardSnapshotsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">ResetRetentionDurationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationDays` <a name="ResetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```csharp
private void ResetRetentionDurationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">RetentionDurationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDurationDaysInput`<sup>Optional</sup> <a name="RetentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```csharp
public double RetentionDurationDaysInput { get; }
```

- *Type:* double

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get"></a>

```csharp
private GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList StandardSnapshots { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```csharp
private GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```csharp
public double RetentionDurationDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---



