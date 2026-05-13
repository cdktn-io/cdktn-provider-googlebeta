# `googleNetworkSecuritySacAttachment` Submodule <a name="`googleNetworkSecuritySacAttachment` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacAttachment <a name="GoogleNetworkSecuritySacAttachment" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachment(Construct Scope, string Id, GoogleNetworkSecuritySacAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions">PutSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions">ResetSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSymantecOptions` <a name="PutSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions"></a>

```csharp
private void PutSymantecOptions(GoogleNetworkSecuritySacAttachmentSymantecOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecuritySacAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSymantecOptions` <a name="ResetSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions"></a>

```csharp
private void ResetSymantecOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecuritySacAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput">NccGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput">SacRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput">SymantecOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway">NccGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm">SacRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SymantecOptions`<sup>Required</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference SymantecOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NccGatewayInput`<sup>Optional</sup> <a name="NccGatewayInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput"></a>

```csharp
public string NccGatewayInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SacRealmInput`<sup>Optional</sup> <a name="SacRealmInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput"></a>

```csharp
public string SacRealmInput { get; }
```

- *Type:* string

---

##### `SymantecOptionsInput`<sup>Optional</sup> <a name="SymantecOptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentSymantecOptions SymantecOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkSecuritySacAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NccGateway`<sup>Required</sup> <a name="NccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway"></a>

```csharp
public string NccGateway { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SacRealm`<sup>Required</sup> <a name="SacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm"></a>

```csharp
public string SacRealm { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacAttachmentConfig <a name="GoogleNetworkSecuritySacAttachmentConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string NccGateway,
    string SacRealm,
    string Country = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkSecuritySacAttachmentSymantecOptions SymantecOptions = null,
    GoogleNetworkSecuritySacAttachmentTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location">Location</a></code> | <code>string</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway">NccGateway</a></code> | <code>string</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm">SacRealm</a></code> | <code>string</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country">Country</a></code> | <code>string</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `NccGateway`<sup>Required</sup> <a name="NccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway"></a>

```csharp
public string NccGateway { get; set; }
```

- *Type:* string

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `SacRealm`<sup>Required</sup> <a name="SacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm"></a>

```csharp
public string SacRealm { get; set; }
```

- *Type:* string

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `SymantecOptions`<sup>Optional</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentSymantecOptions SymantecOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

### GoogleNetworkSecuritySacAttachmentSymantecOptions <a name="GoogleNetworkSecuritySacAttachmentSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachmentSymantecOptions {
    string SymantecLocationName = null,
    string SymantecSite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName">SymantecLocationName</a></code> | <code>string</code> | Name to be used when creating a location on the customer's behalf in Symantec's Location API. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite">SymantecSite</a></code> | <code>string</code> | Symantec data center identifier that this attachment will connect to. |

---

##### `SymantecLocationName`<sup>Optional</sup> <a name="SymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName"></a>

```csharp
public string SymantecLocationName { get; set; }
```

- *Type:* string

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

##### `SymantecSite`<sup>Optional</sup> <a name="SymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite"></a>

```csharp
public string SymantecSite { get; set; }
```

- *Type:* string

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

### GoogleNetworkSecuritySacAttachmentTimeouts <a name="GoogleNetworkSecuritySacAttachmentTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName">ResetSymantecLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite">ResetSymantecSite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSymantecLocationName` <a name="ResetSymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName"></a>

```csharp
private void ResetSymantecLocationName()
```

##### `ResetSymantecSite` <a name="ResetSymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite"></a>

```csharp
private void ResetSymantecSite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput">SymantecLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput">SymantecSiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName">SymantecLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite">SymantecSite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SymantecLocationNameInput`<sup>Optional</sup> <a name="SymantecLocationNameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput"></a>

```csharp
public string SymantecLocationNameInput { get; }
```

- *Type:* string

---

##### `SymantecSiteInput`<sup>Optional</sup> <a name="SymantecSiteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput"></a>

```csharp
public string SymantecSiteInput { get; }
```

- *Type:* string

---

##### `SymantecLocationName`<sup>Required</sup> <a name="SymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName"></a>

```csharp
public string SymantecLocationName { get; }
```

- *Type:* string

---

##### `SymantecSite`<sup>Required</sup> <a name="SymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite"></a>

```csharp
public string SymantecSite { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecuritySacAttachmentSymantecOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---


### GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference <a name="GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkSecuritySacAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---



