# `googleBackupDrAutoProtectionPolicyBinding` Submodule <a name="`googleBackupDrAutoProtectionPolicyBinding` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicyBinding <a name="GoogleBackupDrAutoProtectionPolicyBinding" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBinding(Construct Scope, string Id, GoogleBackupDrAutoProtectionPolicyBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig">GoogleBackupDrAutoProtectionPolicyBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig">GoogleBackupDrAutoProtectionPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete">ResetWaitForDelete</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBackupDrAutoProtectionPolicyBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForDelete` <a name="ResetWaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete"></a>

```csharp
private void ResetWaitForDelete()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicyBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicyBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicyBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicyBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicyBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrAutoProtectionPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary">BindingEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput">AutoProtectionPolicyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput">WaitForDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId">AutoProtectionPolicyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete">WaitForDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BindingEvaluationSummary`<sup>Required</sup> <a name="BindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList BindingEvaluationSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoProtectionPolicyBindingIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyBindingIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput"></a>

```csharp
public string AutoProtectionPolicyBindingIdInput { get; }
```

- *Type:* string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput"></a>

```csharp
public string AutoProtectionPolicyIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBindingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `WaitForDeleteInput`<sup>Optional</sup> <a name="WaitForDeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput"></a>

```csharp
public bool|IResolvable WaitForDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoProtectionPolicyBindingId`<sup>Required</sup> <a name="AutoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId"></a>

```csharp
public string AutoProtectionPolicyBindingId { get; }
```

- *Type:* string

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `WaitForDelete`<sup>Required</sup> <a name="WaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete"></a>

```csharp
public bool|IResolvable WaitForDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary {

};
```


### GoogleBackupDrAutoProtectionPolicyBindingConfig <a name="GoogleBackupDrAutoProtectionPolicyBindingConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoProtectionPolicyBindingId,
    string AutoProtectionPolicyId,
    string Location,
    string Scope,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleBackupDrAutoProtectionPolicyBindingTimeouts Timeouts = null,
    bool|IResolvable WaitForDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId">AutoProtectionPolicyBindingId</a></code> | <code>string</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location">Location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope">Scope</a></code> | <code>string</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete">WaitForDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoProtectionPolicyBindingId`<sup>Required</sup> <a name="AutoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId"></a>

```csharp
public string AutoProtectionPolicyBindingId { get; set; }
```

- *Type:* string

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; set; }
```

- *Type:* string

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#location GoogleBackupDrAutoProtectionPolicyBinding#location}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#scope GoogleBackupDrAutoProtectionPolicyBinding#scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#deletion_policy GoogleBackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#timeouts GoogleBackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `WaitForDelete`<sup>Optional</sup> <a name="WaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete"></a>

```csharp
public bool|IResolvable WaitForDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#wait_for_delete GoogleBackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

### GoogleBackupDrAutoProtectionPolicyBindingTimeouts <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get"></a>

```csharp
private GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```csharp
public string FailedResourceCount { get; }
```

- *Type:* string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```csharp
public string MatchingResourceCount { get; }
```

- *Type:* string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```csharp
public string ProtectedResourceCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBindingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---



