# `googleComputeZoneVmExtensionPolicy` Submodule <a name="`googleComputeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeZoneVmExtensionPolicy <a name="GoogleComputeZoneVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicy(Construct Scope, string Id, GoogleComputeZoneVmExtensionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig">GoogleComputeZoneVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig">GoogleComputeZoneVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies">PutExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors">PutInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors">ResetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionPolicies` <a name="PutExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```csharp
private void PutExtensionPolicies(IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `PutInstanceSelectors` <a name="PutInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```csharp
private void PutInstanceSelectors(IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeZoneVmExtensionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInstanceSelectors` <a name="ResetInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```csharp
private void ResetInstanceSelectors()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeZoneVmExtensionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeZoneVmExtensionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeZoneVmExtensionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeZoneVmExtensionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeZoneVmExtensionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies">ExtensionPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors">InstanceSelectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal">ManagedByGlobal</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">ExtensionPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">InstanceSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList ExtensionPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceSelectors`<sup>Required</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList InstanceSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `ManagedByGlobal`<sup>Required</sup> <a name="ManagedByGlobal" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```csharp
public IResolvable ManagedByGlobal { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExtensionPoliciesInput`<sup>Optional</sup> <a name="ExtensionPoliciesInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] ExtensionPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `InstanceSelectorsInput`<sup>Optional</sup> <a name="InstanceSelectorsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] InstanceSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeZoneVmExtensionPolicyConfig <a name="GoogleComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] ExtensionPolicies,
    string Name,
    string Zone,
    string DeletionPolicy = null,
    string Description = null,
    IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] InstanceSelectors = null,
    double Priority = null,
    string Project = null,
    GoogleComputeZoneVmExtensionPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">ExtensionPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone">Zone</a></code> | <code>string</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">InstanceSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] ExtensionPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `InstanceSelectors`<sup>Optional</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] InstanceSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

### GoogleComputeZoneVmExtensionPolicyExtensionPolicies <a name="GoogleComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyExtensionPolicies {
    string ExtensionName,
    string PinnedVersion = null,
    string StringConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">ExtensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">PinnedVersion</a></code> | <code>string</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">StringConfig</a></code> | <code>string</code> | String-based configuration data for the extension. |

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```csharp
public string ExtensionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}.

---

##### `PinnedVersion`<sup>Optional</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```csharp
public string PinnedVersion { get; set; }
```

- *Type:* string

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#pinned_version GoogleComputeZoneVmExtensionPolicy#pinned_version}

---

##### `StringConfig`<sup>Optional</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```csharp
public string StringConfig { get; set; }
```

- *Type:* string

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#string_config GoogleComputeZoneVmExtensionPolicy#string_config}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectors <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectors {
    GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#label_selector GoogleComputeZoneVmExtensionPolicy#label_selector}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector {
    System.Collections.Generic.IDictionary<string, string> InclusionLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">InclusionLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key-value pairs representing VM labels. |

---

##### `InclusionLabels`<sup>Optional</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeZoneVmExtensionPolicyTimeouts <a name="GoogleComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```csharp
private GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---


### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">ResetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">ResetStringConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedVersion` <a name="ResetPinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```csharp
private void ResetPinnedVersion()
```

##### `ResetStringConfig` <a name="ResetStringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```csharp
private void ResetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">ExtensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">PinnedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">StringConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">ExtensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">PinnedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">StringConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtensionNameInput`<sup>Optional</sup> <a name="ExtensionNameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```csharp
public string ExtensionNameInput { get; }
```

- *Type:* string

---

##### `PinnedVersionInput`<sup>Optional</sup> <a name="PinnedVersionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```csharp
public string PinnedVersionInput { get; }
```

- *Type:* string

---

##### `StringConfigInput`<sup>Optional</sup> <a name="StringConfigInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```csharp
public string StringConfigInput { get; }
```

- *Type:* string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```csharp
public string ExtensionName { get; }
```

- *Type:* string

---

##### `PinnedVersion`<sup>Required</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```csharp
public string PinnedVersion { get; }
```

- *Type:* string

---

##### `StringConfig`<sup>Required</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```csharp
public string StringConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">ResetInclusionLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclusionLabels` <a name="ResetInclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```csharp
private void ResetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">InclusionLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">InclusionLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InclusionLabelsInput`<sup>Optional</sup> <a name="InclusionLabelsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InclusionLabels`<sup>Required</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InclusionLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```csharp
private GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```csharp
private void PutLabelSelector(GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```csharp
private void ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference LabelSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```csharp
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector LabelSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeZoneVmExtensionPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---



