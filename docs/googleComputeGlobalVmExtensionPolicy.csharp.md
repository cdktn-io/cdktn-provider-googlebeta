# `googleComputeGlobalVmExtensionPolicy` Submodule <a name="`googleComputeGlobalVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalVmExtensionPolicy <a name="GoogleComputeGlobalVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy google_compute_global_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicy(Construct Scope, string Id, GoogleComputeGlobalVmExtensionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig">GoogleComputeGlobalVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig">GoogleComputeGlobalVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies">PutExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors">PutInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors">ResetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionPolicies` <a name="PutExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies"></a>

```csharp
private void PutExtensionPolicies(IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]

---

##### `PutInstanceSelectors` <a name="PutInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors"></a>

```csharp
private void PutInstanceSelectors(IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation"></a>

```csharp
private void PutRolloutOperation(GoogleComputeGlobalVmExtensionPolicyRolloutOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeGlobalVmExtensionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInstanceSelectors` <a name="ResetInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors"></a>

```csharp
private void ResetInstanceSelectors()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeGlobalVmExtensionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeGlobalVmExtensionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeGlobalVmExtensionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeGlobalVmExtensionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeGlobalVmExtensionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeGlobalVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies">ExtensionPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors">InstanceSelectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus">ScopedResourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp">UpdateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput">ExtensionPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput">InstanceSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList ExtensionPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceSelectors`<sup>Required</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList InstanceSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference RolloutOperation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a>

---

##### `ScopedResourceStatus`<sup>Required</sup> <a name="ScopedResourceStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus"></a>

```csharp
public string ScopedResourceStatus { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTimestamp`<sup>Required</sup> <a name="UpdateTimestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp"></a>

```csharp
public string UpdateTimestamp { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExtensionPoliciesInput`<sup>Optional</sup> <a name="ExtensionPoliciesInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] ExtensionPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]

---

##### `InstanceSelectorsInput`<sup>Optional</sup> <a name="InstanceSelectorsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] InstanceSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperation RolloutOperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalVmExtensionPolicyConfig <a name="GoogleComputeGlobalVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] ExtensionPolicies,
    string Name,
    GoogleComputeGlobalVmExtensionPolicyRolloutOperation RolloutOperation,
    string DeletionPolicy = null,
    string Description = null,
    IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] InstanceSelectors = null,
    double Priority = null,
    string Project = null,
    GoogleComputeGlobalVmExtensionPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies">ExtensionPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors">InstanceSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Used to resolve conflicts when multiple policies are active. Defaults to 0. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] ExtensionPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#extension_policies GoogleComputeGlobalVmExtensionPolicy#extension_policies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z](%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?$' to comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperation RolloutOperation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#rollout_operation GoogleComputeGlobalVmExtensionPolicy#rollout_operation}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#deletion_policy GoogleComputeGlobalVmExtensionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#description GoogleComputeGlobalVmExtensionPolicy#description}

---

##### `InstanceSelectors`<sup>Optional</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] InstanceSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#instance_selectors GoogleComputeGlobalVmExtensionPolicy#instance_selectors}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Used to resolve conflicts when multiple policies are active. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#priority GoogleComputeGlobalVmExtensionPolicy#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#timeouts GoogleComputeGlobalVmExtensionPolicy#timeouts}

---

### GoogleComputeGlobalVmExtensionPolicyExtensionPolicies <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyExtensionPolicies {
    string ExtensionName,
    string PinnedVersion = null,
    string StringConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName">ExtensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion">PinnedVersion</a></code> | <code>string</code> | The version pinning for the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig">StringConfig</a></code> | <code>string</code> | String configuration payload. |

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```csharp
public string ExtensionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}.

---

##### `PinnedVersion`<sup>Optional</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```csharp
public string PinnedVersion { get; set; }
```

- *Type:* string

The version pinning for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#pinned_version GoogleComputeGlobalVmExtensionPolicy#pinned_version}

---

##### `StringConfig`<sup>Optional</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```csharp
public string StringConfig { get; set; }
```

- *Type:* string

String configuration payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#string_config GoogleComputeGlobalVmExtensionPolicy#string_config}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectors <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyInstanceSelectors {
    GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#label_selector GoogleComputeGlobalVmExtensionPolicy#label_selector}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector {
    System.Collections.Generic.IDictionary<string, string> InclusionLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">InclusionLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |

---

##### `InclusionLabels`<sup>Optional</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#inclusion_labels GoogleComputeGlobalVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperation <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperation {
    GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput RolloutInput
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput RolloutInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#rollout_input GoogleComputeGlobalVmExtensionPolicy#rollout_input}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput {
    string ConflictBehavior = null,
    string Name = null,
    string PredefinedRolloutPlan = null,
    string RetryUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior">ConflictBehavior</a></code> | <code>string</code> | Specifies the behavior of the rollout if a conflict is detected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name">Name</a></code> | <code>string</code> | The name of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | Specifies the predefined rollout plan for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid">RetryUuid</a></code> | <code>string</code> | The UUID that identifies a policy rollout retry attempt. |

---

##### `ConflictBehavior`<sup>Optional</sup> <a name="ConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior"></a>

```csharp
public string ConflictBehavior { get; set; }
```

- *Type:* string

Specifies the behavior of the rollout if a conflict is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#conflict_behavior GoogleComputeGlobalVmExtensionPolicy#conflict_behavior}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `PredefinedRolloutPlan`<sup>Optional</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; set; }
```

- *Type:* string

Specifies the predefined rollout plan for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#predefined_rollout_plan GoogleComputeGlobalVmExtensionPolicy#predefined_rollout_plan}

---

##### `RetryUuid`<sup>Optional</sup> <a name="RetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid"></a>

```csharp
public string RetryUuid { get; set; }
```

- *Type:* string

The UUID that identifies a policy rollout retry attempt.

It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#retry_uuid GoogleComputeGlobalVmExtensionPolicy#retry_uuid}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus {

};
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts {

};
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus {

};
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout {

};
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus {

};
```


### GoogleComputeGlobalVmExtensionPolicyTimeouts <a name="GoogleComputeGlobalVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>[]

---


### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">ResetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">ResetStringConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedVersion` <a name="ResetPinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```csharp
private void ResetPinnedVersion()
```

##### `ResetStringConfig` <a name="ResetStringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```csharp
private void ResetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">ExtensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">PinnedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">StringConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">ExtensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">PinnedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">StringConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtensionNameInput`<sup>Optional</sup> <a name="ExtensionNameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```csharp
public string ExtensionNameInput { get; }
```

- *Type:* string

---

##### `PinnedVersionInput`<sup>Optional</sup> <a name="PinnedVersionInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```csharp
public string PinnedVersionInput { get; }
```

- *Type:* string

---

##### `StringConfigInput`<sup>Optional</sup> <a name="StringConfigInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```csharp
public string StringConfigInput { get; }
```

- *Type:* string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```csharp
public string ExtensionName { get; }
```

- *Type:* string

---

##### `PinnedVersion`<sup>Required</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```csharp
public string PinnedVersion { get; }
```

- *Type:* string

---

##### `StringConfig`<sup>Required</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```csharp
public string StringConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyExtensionPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies">GoogleComputeGlobalVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">ResetInclusionLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclusionLabels` <a name="ResetInclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```csharp
private void ResetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">InclusionLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">InclusionLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InclusionLabelsInput`<sup>Optional</sup> <a name="InclusionLabelsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InclusionLabels`<sup>Required</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>[]

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```csharp
private void PutLabelSelector(GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```csharp
private void ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference LabelSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyInstanceSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors">GoogleComputeGlobalVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput"></a>

```csharp
private void PutRolloutInput(GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference RolloutInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList RolloutStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput RolloutInputInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior">ResetConflictBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan">ResetPredefinedRolloutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid">ResetRetryUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictBehavior` <a name="ResetConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior"></a>

```csharp
private void ResetConflictBehavior()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPredefinedRolloutPlan` <a name="ResetPredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan"></a>

```csharp
private void ResetPredefinedRolloutPlan()
```

##### `ResetRetryUuid` <a name="ResetRetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid"></a>

```csharp
private void ResetRetryUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput">ConflictBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput">RetryUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior">ConflictBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid">RetryUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictBehaviorInput`<sup>Optional</sup> <a name="ConflictBehaviorInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput"></a>

```csharp
public string ConflictBehaviorInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```csharp
public string PredefinedRolloutPlanInput { get; }
```

- *Type:* string

---

##### `RetryUuidInput`<sup>Optional</sup> <a name="RetryUuidInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput"></a>

```csharp
public string RetryUuidInput { get; }
```

- *Type:* string

---

##### `ConflictBehavior`<sup>Required</sup> <a name="ConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior"></a>

```csharp
public string ConflictBehavior { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; }
```

- *Type:* string

---

##### `RetryUuid`<sup>Required</sup> <a name="RetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid"></a>

```csharp
public string RetryUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName"></a>

```csharp
public string LocationName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout">Rollout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList LocationRolloutStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout"></a>

```csharp
public string Rollout { get; }
```

- *Type:* string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan"></a>

```csharp
public string RolloutPlan { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts">CurrentRollouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout">PreviousRollout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentRollouts`<sup>Required</sup> <a name="CurrentRollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList CurrentRollouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a>

---

##### `PreviousRollout`<sup>Required</sup> <a name="PreviousRollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList PreviousRollout { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get"></a>

```csharp
private GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName"></a>

```csharp
public string LocationName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout">Rollout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList LocationRolloutStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout"></a>

```csharp
public string Rollout { get; }
```

- *Type:* string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan"></a>

```csharp
public string RolloutPlan { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a>

---


### GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeGlobalVmExtensionPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---



