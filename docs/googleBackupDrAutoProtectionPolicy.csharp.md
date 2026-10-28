# `googleBackupDrAutoProtectionPolicy` Submodule <a name="`googleBackupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicy <a name="GoogleBackupDrAutoProtectionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicy(Construct Scope, string Id, GoogleBackupDrAutoProtectionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails">PutBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlanDetails` <a name="PutBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```csharp
private void PutBackupPlanDetails(IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria"></a>

```csharp
private void PutCriteria(GoogleBackupDrAutoProtectionPolicyCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBackupDrAutoProtectionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBackupDrAutoProtectionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails">BackupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary">BindingSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary">PolicyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">BackupPlanDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList BackupPlanDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `BindingSummary`<sup>Required</sup> <a name="BindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingSummaryList BindingSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyEvaluationSummary`<sup>Required</sup> <a name="PolicyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList PolicyEvaluationSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```csharp
public string AutoProtectionPolicyIdInput { get; }
```

- *Type:* string

---

##### `BackupPlanDetailsInput`<sup>Optional</sup> <a name="BackupPlanDetailsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetails <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBackupPlanDetails {
    string BackupPlan,
    string ResourceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">BackupPlan</a></code> | <code>string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```csharp
public string BackupPlan { get; set; }
```

- *Type:* string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan GoogleBackupDrAutoProtectionPolicy#backup_plan}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#resource_type GoogleBackupDrAutoProtectionPolicy#resource_type}

---

### GoogleBackupDrAutoProtectionPolicyBindingSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingSummary {

};
```


### GoogleBackupDrAutoProtectionPolicyConfig <a name="GoogleBackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoProtectionPolicyId,
    IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetails,
    GoogleBackupDrAutoProtectionPolicyCriteria Criteria,
    string Location,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleBackupDrAutoProtectionPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">BackupPlanDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description">Description</a></code> | <code>string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```csharp
public string AutoProtectionPolicyId { get; set; }
```

- *Type:* string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[] BackupPlanDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan_details GoogleBackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#criteria GoogleBackupDrAutoProtectionPolicy#criteria}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#location GoogleBackupDrAutoProtectionPolicy#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#deletion_policy GoogleBackupDrAutoProtectionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#description GoogleBackupDrAutoProtectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#timeouts GoogleBackupDrAutoProtectionPolicy#timeouts}

---

### GoogleBackupDrAutoProtectionPolicyCriteria <a name="GoogleBackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteria {
    IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions">MatchingConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | matching_conditions block. |

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#matching_conditions GoogleBackupDrAutoProtectionPolicy#matching_conditions}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions {
    GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `LabelCondition`<sup>Optional</sup> <a name="LabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#label_condition GoogleBackupDrAutoProtectionPolicy#label_condition}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">Key</a></code> | <code>string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">Values</a></code> | <code>string[]</code> | The values of the label to match. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#key GoogleBackupDrAutoProtectionPolicy#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#values GoogleBackupDrAutoProtectionPolicy#values}

---

### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary {

};
```


### GoogleBackupDrAutoProtectionPolicyTimeouts <a name="GoogleBackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```csharp
private GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---


### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">BackupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```csharp
public string BackupPlanInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```csharp
public string BackupPlan { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyBackupPlanDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails">GoogleBackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```csharp
private GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">ProjectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectCount`<sup>Required</sup> <a name="ProjectCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```csharp
public string ProjectCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyBindingSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```csharp
private GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">PutLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">ResetLabelCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelCondition` <a name="PutLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```csharp
private void PutLabelCondition(GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `ResetLabelCondition` <a name="ResetLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```csharp
private void ResetLabelCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">LabelConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelCondition`<sup>Required</sup> <a name="LabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference LabelCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `LabelConditionInput`<sup>Optional</sup> <a name="LabelConditionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition LabelConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">PutMatchingConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingConditions` <a name="PutMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```csharp
private void PutMatchingConditions(IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">MatchingConditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">MatchingConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList MatchingConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `MatchingConditionsInput`<sup>Optional</sup> <a name="MatchingConditionsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions[] MatchingConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```csharp
private GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```csharp
public string FailedResourceCount { get; }
```

- *Type:* string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```csharp
public string MatchingResourceCount { get; }
```

- *Type:* string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```csharp
public string ProtectedResourceCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBackupDrAutoProtectionPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---



