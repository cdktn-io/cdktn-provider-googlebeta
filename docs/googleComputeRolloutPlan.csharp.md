# `googleComputeRolloutPlan` Submodule <a name="`googleComputeRolloutPlan` Submodule" id="@cdktn/provider-google-beta.googleComputeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRolloutPlan <a name="GoogleComputeRolloutPlan" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlan(Construct Scope, string Id, GoogleComputeRolloutPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves">PutWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope">ResetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRolloutPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `PutWaves` <a name="PutWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves"></a>

```csharp
private void PutWaves(IResolvable|GoogleComputeRolloutPlanWaves[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationScope` <a name="ResetLocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope"></a>

```csharp
private void ResetLocationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRolloutPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRolloutPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRolloutPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeRolloutPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRolloutPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves">Waves</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput">LocationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput">WavesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope">LocationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts"></a>

```csharp
public GoogleComputeRolloutPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves"></a>

```csharp
public GoogleComputeRolloutPlanWavesList Waves { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationScopeInput`<sup>Optional</sup> <a name="LocationScopeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput"></a>

```csharp
public string LocationScopeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `WavesInput`<sup>Optional</sup> <a name="WavesInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWaves[] WavesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationScope`<sup>Required</sup> <a name="LocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope"></a>

```csharp
public string LocationScope { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRolloutPlanConfig <a name="GoogleComputeRolloutPlanConfig" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|GoogleComputeRolloutPlanWaves[] Waves,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string LocationScope = null,
    string Project = null,
    GoogleComputeRolloutPlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves">Waves</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | waves block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope">LocationScope</a></code> | <code>string</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#name GoogleComputeRolloutPlan#name}

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWaves[] Waves { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#waves GoogleComputeRolloutPlan#waves}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#deletion_policy GoogleComputeRolloutPlan#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#description GoogleComputeRolloutPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationScope`<sup>Optional</sup> <a name="LocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope"></a>

```csharp
public string LocationScope { get; set; }
```

- *Type:* string

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#location_scope GoogleComputeRolloutPlan#location_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts"></a>

```csharp
public GoogleComputeRolloutPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#timeouts GoogleComputeRolloutPlan#timeouts}

---

### GoogleComputeRolloutPlanTimeouts <a name="GoogleComputeRolloutPlanTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}.

---

### GoogleComputeRolloutPlanWaves <a name="GoogleComputeRolloutPlanWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWaves {
    IResolvable|GoogleComputeRolloutPlanWavesSelectors[] Selectors,
    GoogleComputeRolloutPlanWavesValidation Validation,
    string DisplayName = null,
    GoogleComputeRolloutPlanWavesOrchestrationOptions OrchestrationOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors">Selectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesSelectors[] Selectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#selectors GoogleComputeRolloutPlan#selectors}

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidation Validation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#validation GoogleComputeRolloutPlan#validation}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#display_name GoogleComputeRolloutPlan#display_name}

---

##### `OrchestrationOptions`<sup>Optional</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```csharp
public GoogleComputeRolloutPlanWavesOrchestrationOptions OrchestrationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#orchestration_options GoogleComputeRolloutPlan#orchestration_options}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptions <a name="GoogleComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOrchestrationOptions {
    IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[] Delays = null,
    double MaxConcurrentLocations = null,
    double MaxConcurrentResourcesPerLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays">Delays</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | delays block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>double</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>double</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `Delays`<sup>Optional</sup> <a name="Delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[] Delays { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#delays GoogleComputeRolloutPlan#delays}

---

##### `MaxConcurrentLocations`<sup>Optional</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```csharp
public double MaxConcurrentLocations { get; set; }
```

- *Type:* double

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#max_concurrent_locations GoogleComputeRolloutPlan#max_concurrent_locations}

---

##### `MaxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```csharp
public double MaxConcurrentResourcesPerLocation { get; set; }
```

- *Type:* double

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#max_concurrent_resources_per_location GoogleComputeRolloutPlan#max_concurrent_resources_per_location}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays {
    string Delimiter = null,
    string Duration = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">Delimiter</a></code> | <code>string</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">Duration</a></code> | <code>string</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">Type</a></code> | <code>string</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#delimiter GoogleComputeRolloutPlan#delimiter}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#duration GoogleComputeRolloutPlan#duration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

### GoogleComputeRolloutPlanWavesSelectors <a name="GoogleComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectors {
    GoogleComputeRolloutPlanWavesSelectorsLocationSelector LocationSelector = null,
    GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector ResourceHierarchySelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `LocationSelector`<sup>Optional</sup> <a name="LocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector LocationSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#location_selector GoogleComputeRolloutPlan#location_selector}

---

##### `ResourceHierarchySelector`<sup>Optional</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector ResourceHierarchySelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#resource_hierarchy_selector GoogleComputeRolloutPlan#resource_hierarchy_selector}

---

### GoogleComputeRolloutPlanWavesSelectorsLocationSelector <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsLocationSelector {
    string[] IncludedLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">IncludedLocations</a></code> | <code>string[]</code> | Example: "us-central1-a". |

---

##### `IncludedLocations`<sup>Optional</sup> <a name="IncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```csharp
public string[] IncludedLocations { get; set; }
```

- *Type:* string[]

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#included_locations GoogleComputeRolloutPlan#included_locations}

---

### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector {
    string[] IncludedFolders = null,
    string[] IncludedOrganizations = null,
    string[] IncludedProjects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">IncludedFolders</a></code> | <code>string[]</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">IncludedOrganizations</a></code> | <code>string[]</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">IncludedProjects</a></code> | <code>string[]</code> | Format: "projects/{project_id}". |

---

##### `IncludedFolders`<sup>Optional</sup> <a name="IncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```csharp
public string[] IncludedFolders { get; set; }
```

- *Type:* string[]

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#included_folders GoogleComputeRolloutPlan#included_folders}

---

##### `IncludedOrganizations`<sup>Optional</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```csharp
public string[] IncludedOrganizations { get; set; }
```

- *Type:* string[]

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#included_organizations GoogleComputeRolloutPlan#included_organizations}

---

##### `IncludedProjects`<sup>Optional</sup> <a name="IncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```csharp
public string[] IncludedProjects { get; set; }
```

- *Type:* string[]

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#included_projects GoogleComputeRolloutPlan#included_projects}

---

### GoogleComputeRolloutPlanWavesValidation <a name="GoogleComputeRolloutPlanWavesValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesValidation {
    string Type,
    GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata TimeBasedValidationMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type">Type</a></code> | <code>string</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

##### `TimeBasedValidationMetadata`<sup>Optional</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata TimeBasedValidationMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#time_based_validation_metadata GoogleComputeRolloutPlan#time_based_validation_metadata}

---

### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata {
    string WaitDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">WaitDuration</a></code> | <code>string</code> | The duration that the system waits in between waves. |

---

##### `WaitDuration`<sup>Optional</sup> <a name="WaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```csharp
public string WaitDuration { get; set; }
```

- *Type:* string

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_compute_rollout_plan#wait_duration GoogleComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRolloutPlanTimeoutsOutputReference <a name="GoogleComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---


### GoogleComputeRolloutPlanWavesList <a name="GoogleComputeRolloutPlanWavesList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get"></a>

```csharp
private GoogleComputeRolloutPlanWavesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWaves[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>[]

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```csharp
private GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">PutDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">ResetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">ResetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">ResetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDelays` <a name="PutDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```csharp
private void PutDelays(IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `ResetDelays` <a name="ResetDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```csharp
private void ResetDelays()
```

##### `ResetMaxConcurrentLocations` <a name="ResetMaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```csharp
private void ResetMaxConcurrentLocations()
```

##### `ResetMaxConcurrentResourcesPerLocation` <a name="ResetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```csharp
private void ResetMaxConcurrentResourcesPerLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">Delays</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">DelaysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">MaxConcurrentLocationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">MaxConcurrentResourcesPerLocationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Delays`<sup>Required</sup> <a name="Delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```csharp
public GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList Delays { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `DelaysInput`<sup>Optional</sup> <a name="DelaysInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays[] DelaysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `MaxConcurrentLocationsInput`<sup>Optional</sup> <a name="MaxConcurrentLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```csharp
public double MaxConcurrentLocationsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```csharp
public double MaxConcurrentResourcesPerLocationInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentLocations`<sup>Required</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```csharp
public double MaxConcurrentLocations { get; }
```

- *Type:* double

---

##### `MaxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```csharp
public double MaxConcurrentResourcesPerLocation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRolloutPlanWavesOrchestrationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---


### GoogleComputeRolloutPlanWavesOutputReference <a name="GoogleComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">PutOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">ResetOrchestrationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrchestrationOptions` <a name="PutOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```csharp
private void PutOrchestrationOptions(GoogleComputeRolloutPlanWavesOrchestrationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```csharp
private void PutSelectors(IResolvable|GoogleComputeRolloutPlanWavesSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---

##### `PutValidation` <a name="PutValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation"></a>

```csharp
private void PutValidation(GoogleComputeRolloutPlanWavesValidation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetOrchestrationOptions` <a name="ResetOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```csharp
private void ResetOrchestrationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">OrchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput">ValidationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `OrchestrationOptions`<sup>Required</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```csharp
public GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference OrchestrationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsList Selectors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidationOutputReference Validation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `OrchestrationOptionsInput`<sup>Optional</sup> <a name="OrchestrationOptionsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```csharp
public GoogleComputeRolloutPlanWavesOrchestrationOptions OrchestrationOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesSelectors[] SelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidation ValidationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWaves InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>

---


### GoogleComputeRolloutPlanWavesSelectorsList <a name="GoogleComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get"></a>

```csharp
private GoogleComputeRolloutPlanWavesSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>[]

---


### GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">ResetIncludedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedLocations` <a name="ResetIncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```csharp
private void ResetIncludedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">IncludedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">IncludedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludedLocationsInput`<sup>Optional</sup> <a name="IncludedLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```csharp
public string[] IncludedLocationsInput { get; }
```

- *Type:* string[]

---

##### `IncludedLocations`<sup>Required</sup> <a name="IncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```csharp
public string[] IncludedLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### GoogleComputeRolloutPlanWavesSelectorsOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">PutLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">PutResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">ResetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">ResetResourceHierarchySelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationSelector` <a name="PutLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```csharp
private void PutLocationSelector(GoogleComputeRolloutPlanWavesSelectorsLocationSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `PutResourceHierarchySelector` <a name="PutResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```csharp
private void PutResourceHierarchySelector(GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `ResetLocationSelector` <a name="ResetLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```csharp
private void ResetLocationSelector()
```

##### `ResetResourceHierarchySelector` <a name="ResetResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```csharp
private void ResetResourceHierarchySelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">LocationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">ResourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationSelector`<sup>Required</sup> <a name="LocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference LocationSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `ResourceHierarchySelector`<sup>Required</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference ResourceHierarchySelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `LocationSelectorInput`<sup>Optional</sup> <a name="LocationSelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector LocationSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `ResourceHierarchySelectorInput`<sup>Optional</sup> <a name="ResourceHierarchySelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector ResourceHierarchySelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeRolloutPlanWavesSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>

---


### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">ResetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">ResetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">ResetIncludedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedFolders` <a name="ResetIncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```csharp
private void ResetIncludedFolders()
```

##### `ResetIncludedOrganizations` <a name="ResetIncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```csharp
private void ResetIncludedOrganizations()
```

##### `ResetIncludedProjects` <a name="ResetIncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```csharp
private void ResetIncludedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">IncludedFoldersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">IncludedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">IncludedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">IncludedFolders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">IncludedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">IncludedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludedFoldersInput`<sup>Optional</sup> <a name="IncludedFoldersInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```csharp
public string[] IncludedFoldersInput { get; }
```

- *Type:* string[]

---

##### `IncludedOrganizationsInput`<sup>Optional</sup> <a name="IncludedOrganizationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```csharp
public string[] IncludedOrganizationsInput { get; }
```

- *Type:* string[]

---

##### `IncludedProjectsInput`<sup>Optional</sup> <a name="IncludedProjectsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```csharp
public string[] IncludedProjectsInput { get; }
```

- *Type:* string[]

---

##### `IncludedFolders`<sup>Required</sup> <a name="IncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```csharp
public string[] IncludedFolders { get; }
```

- *Type:* string[]

---

##### `IncludedOrganizations`<sup>Required</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```csharp
public string[] IncludedOrganizations { get; }
```

- *Type:* string[]

---

##### `IncludedProjects`<sup>Required</sup> <a name="IncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```csharp
public string[] IncludedProjects { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### GoogleComputeRolloutPlanWavesValidationOutputReference <a name="GoogleComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">PutTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">ResetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeBasedValidationMetadata` <a name="PutTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```csharp
private void PutTimeBasedValidationMetadata(GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `ResetTimeBasedValidationMetadata` <a name="ResetTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```csharp
private void ResetTimeBasedValidationMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">TimeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeBasedValidationMetadata`<sup>Required</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference TimeBasedValidationMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `TimeBasedValidationMetadataInput`<sup>Optional</sup> <a name="TimeBasedValidationMetadataInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata TimeBasedValidationMetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---


### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">ResetWaitDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWaitDuration` <a name="ResetWaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```csharp
private void ResetWaitDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">WaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```csharp
public string WaitDurationInput { get; }
```

- *Type:* string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```csharp
public string WaitDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



